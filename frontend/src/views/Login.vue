<template>
    <div class="row my-5">
        <div class="card col-md-6 offset-md-3 ">  
            <div class="card-body">
                <h3 class="text-center my-3">Login</h3>
                <div class="form-group ">
                    <input v-model="email" type="text" placeholder="Email" class="form-control">
                </div>
                <div class="form-group ">
                    <input v-model="password" type="password" placeholder="Password" class="form-control">
                </div>
                <div class="form-group">
                    <button @click="loginUser()" class="btn btn-success form-control">Login</button>                    
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
            email : '',
            password : ''
        }
    },
    methods : {
        async loginUser(){
        try{
            const response = await Axios.post("http://localhost:3000/api/auth/login", {
                email : this.email,
                password : this.password
                });
                
                const data = await response.data;
                console.log(response.data);
                
                localStorage.setItem('auth', JSON.stringify(data));
                this.$root.auth = data;
                this.$router.push('/home');  
        }catch (error){
            console.log(error);
            
                }    
            }
        }
    }

</script>
