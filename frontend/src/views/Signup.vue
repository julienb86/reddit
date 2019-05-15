<template>
    <div class="row my-5">
        <div class="card col-md-6 offset-md-3">  
            <div class="card-body">
                <h3 class="text-center my-3">Signup</h3>
                <div class="form-group ">
                    <input v-model="lastName" type="text" placeholder="Last Name" class="form-control">
                    <small class="danger" v-for="error in errors.field" :key="error">{{ error }}</small>
                </div>
                <div class="form-group ">
                    <input v-model="firstName" type="text" placeholder="First Name" class="form-control">
                    <small v-for="error in errors.field" :key="error">{{ error }}</small>
                </div>
                <div class="form-group">
                    <input v-model="email" type="text" placeholder="Email" class="form-control">
                    <small v-for="error in errors.field" :key="error">{{ error }}</small>
                </div>
                <div class="form-group ">
                    <input v-model="password" type="password" placeholder="Password" class="form-control">
                    <small v-for="error in errors.field" :key="error">{{ error }}</small>
                </div>
                <div class="form-group">
                    <button @click="registerUser()" class="btn btn-success form-control">Signup</button>                    
                </div>
            </div>
        </div>
    </div>
</template>


<script>

import Axios from 'axios';


export default {
    data(){
        return {
            lastName : '',
            firstName: '',
            email : '',
            password: '',
            errors: {}
        }
    },
    methods : {
        async registerUser(){
            try {
                const response = await Axios.post("http://localhost:3000/api/auth/signup", {
                    lastName : this.lastName,
                    firstName : this.firstName,
                    email : this.email,
                    password : this.password,
                });
                console.log(response.data);
                
                const data = await response.data;
                localStorage.setItem('auth', JSON.stringify(data));
                this.$root.auth = data;
                this.$router.push('/');
                }
            catch (response){
                this.errors = response;

                
            }
            
        }
    }
}
</script>
