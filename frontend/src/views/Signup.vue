<template>
    <div class="row my-5">
        <div class="card col-md-6 offset-md-3">  
            <form class="form card-body" @submit.prevent="registerUser()">
                <h3 class="text-center my-3">Signup</h3>
                <div class="form-group" >
                    <input name="name" v-validate="'required'" v-model="name" type="text" placeholder="Name" class="form-control" autofocus>
                    <small v-if="!name" v-show="errors.has('name')" class="text-danger"> {{ errors.first('name') }}</small>
                </div>
                <div class="form-group">
                    <input v-validate="'required|email'" name="email" v-model="email" type="text" placeholder="Email" class="form-control">
                    <small class="text-danger" > {{ errors.first('email')}}</small>
                </div>
                <div class="form-group">
                    <select class="custom-select" v-model="department">
                        <option disabled value="">Select your department</option>
                        <option value="marketing">Marketing</option>
                        <option value="HR">HR</option>
                        <option value="Development">Development</option>
                        <option value="UX/UI">UX/UI</option>
                    </select>
                </div>
                <div class="form-group ">
                    <input v-model="password" type="password" placeholder="Password" class="form-control">
                    <small class="text-danger" ></small>
                </div>
                <div class="form-group">
                    <button :disabled="submitted" class="btn btn-success form-control">Signup</button>                    
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
                    this.$router.push('/');
                    }
                    catch (error){
                    console.log(error);  
                    console.log("the field need to be filled");
                       
                }  

            
        }
    }
}
</script>


             