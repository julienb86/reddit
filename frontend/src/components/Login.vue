<template>
    <div>
        <b-modal id="login" hide-footer>
            <form class="col-12">
                <div class="form-group ">                               
                    <h3 class="text-center my-3">Login</h3>
                    <input v-model="email" type="email" placeholder="Email" class="form-control">
                </div>
                <div class="form-group">
                    <input v-model="password" type="password" placeholder="Password" class="form-control">
                </div>
                <div class="form-group text-center">
                    <b-button @click="loginUser()" :disabled="!isComplete" class="btn form-control">Login</b-button>                    
                </div>
            </form> 
        </b-modal>
    </div>
</template>



<script>
import Axios from 'axios';

export default {
          data(){
        return {
            email : '',
            password: ''
  
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
                console.log(response);
                
                localStorage.setItem('auth', JSON.stringify(data.user));
                this.$root.auth = data;
 
        }catch (error){
            console.log(error);
            
                }    
            }
    },
    computed: {
        isComplete(){
            return this.email && this.password;
        }
    }
}
</script>


<style scoped>

    .btn{
        background-color: #112240;
        font-size: 1.2em;
        color: white;
    }
</style>

