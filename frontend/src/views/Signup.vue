<template>
    <div class="row my-5">
        <div class="card col-md-6 offset-md-3">  
            <form class="form card-body" @submit.prevent="registerUser()">
                <h3 class="text-center my-3">Signup</h3>
                <div class="form-group">
                    <input v-validate="'required|email'" name="email" v-model="email" type="email" placeholder="Email" :class="{'form-control is-invalid': !email, 'form-control is-valid': email}" autofocus>
                    <small class="text-danger" v-show="errors.has('email')"> {{ errors.first('email')}}</small>
                </div>
                <div class="form-group" >
                    <input name="name" v-validate="'required'" v-model="name" type="text" placeholder="Name" :class="{'form-control is-invalid': !name, 'form-control is-valid': name}">
                    <small v-show="errors.has('name')" class="text-danger"> {{ errors.first('name') }}</small>
                </div>
                <div class="form-group"  >
                    <select :class="{'custom-select is-invalid': !department, 'custom-select is-valid': department}" name="department" v-validate="'required'" v-model="department">
                        <option value="">Select your department</option>
                        <option value="marketing">Marketing</option>
                        <option value="HR">HR</option>
                        <option value="Development">Development</option>
                        <option value="UX/UI">UX/UI</option>
                    </select>
                    <small v-show="errors.has('department')" class="text-danger"> {{ errors.first('department') }}</small>
                </div>
                <div class="form-group"  >
                    <input name="password" v-validate="'required|min:6'" v-model="password" type="password" placeholder="Password" :class="{'form-control is-invalid': !password, 'form-control is-valid': password}">
                    <small v-show="errors.has('password')" class="text-danger"> {{ errors.first('password') }}</small>
                </div>
                <div class="form-group">
                    <button :disabled="!isComplete" class="btn btn-success form-control">Signup</button>                    
                </div>
            </form>
        </div>
    </div>
</template>


<script>

import Axios from 'axios';

export default {
    data(){
        return {
            name: '',
            email : '',
            department : '',
            password: '',
            submitted : false
        }
    },
    methods : {
        async registerUser(){
                try {

                    const response = await Axios.post("http://localhost:3000/api/auth/signup", {
                        name : this.name,
                        email : this.email,
                        department : this.department,
                        password : this.password
                    });
                    console.log(response);
                    
                    const data = await response.data;
                    localStorage.setItem('auth', JSON.stringify(data));
                    this.$root.auth = data;
                    this.$router.push('/profile');
                    }
                    catch (error){
                    console.log(error);  
                    console.log("the field need to be filled");
                       
                }  

            
        }
    },
    computed: {
        isComplete(){
            return this.email && this.department && this.password && this.name;
        }
    }
}
</script>


             