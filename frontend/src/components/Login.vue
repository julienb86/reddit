<template>
    <div>
        <b-modal id="login" hide-footer>
            <form class="col-12" @submit.prevent="loginUser()">
                <div class="form-group ">                               
                    <h3 class="text-center my-3">Login</h3>
                    <input v-validate="'required|email'" name="email" v-model="email" type="email" placeholder="Email" :class="{'form-control is-invalid': !email, 'form-control is-valid': email}">
                    <small class="text-danger" v-show="errors.has('email')"> {{ errors.first('email')}}</small>
                </div>
                <div class="form-group">
                    <input v-validate="'required'" name="password" v-model="password" type="password" placeholder="Password" :class="{'form-control is-invalid': !password, 'form-control is-valid': password}">
                    <small v-show="errors.has('password')" class="text-danger"> {{ errors.first('password') }}</small>
                    <small class="text-danger" v-if="error">{{error}}</small>
                </div>
                <div class="form-group text-center">
                    <b-button type="submit" :disabled="!isComplete" class="btn form-control">Login</b-button>                    
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
            password: '',
            error: ''
  
        }
    },
        methods : {
            async loginUser(){
            try {
                await this.$store.dispatch('loginUser', {
                    email : this.email,
                    password : this.password
                });
            this.$router.push('/homepage');
            
            } catch (error) {
                this.error = error.response.data.message;
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

