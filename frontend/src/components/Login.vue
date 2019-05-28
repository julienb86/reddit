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
export default {
          data(){
        return {
            email : '',
            password: ''
  
        }
    },
        methods : {
            loginUser(){
                this.$store.dispatch('loginUser', {
                    email : this.email,
                    password : this.password
                    }); 
                this.$router.push('/homepage');
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

