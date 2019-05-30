<template>
<div>
    <div>
    <!-- Modal Component -->
    <b-modal id="register" hide-footer>
        <form class="col-12" @submit.prevent="registerUser()">
            <h3 class="text-center my-3">Register</h3>
            <div class="form-group">
                <input v-validate="'required|email'" name="email" v-model="email" type="email" placeholder="Email" :class="{'form-control is-invalid': !email, 'form-control is-valid': email}" autofocus>
                <small class="text-danger" v-show="errors.has('email')"> {{ errors.first('email')}}</small>
            </div>
            <div class="form-group" >
                <input name="name" v-validate="'required'" v-model="name" type="text" placeholder="Full Name" :class="{'form-control is-invalid': !name, 'form-control is-valid': name}">
                <small v-show="errors.has('name')" class="text-danger"> {{ errors.first('name') }}</small>
            </div>
            <div class="form-group">
                <select :class="{'custom-select is-invalid': !department, 'custom-select is-valid': department}" name="department" v-validate="'required'" v-model="department" >
                    <option value="">Select your department</option>                   
                    <option v-for="depart in getDepartments"  :key="depart.id" :value="depart">{{depart}}</option> 
                </select>
                <small v-show="errors.has('department')" class="text-danger"> {{ errors.first('department') }}</small>
            </div>
            <datepicker class="form-group" placeholder="Date of birthday (Optional)" :bootstrap-styling="true" :value="birthday" v-model="birthday" name="calendar"></datepicker>
            <div class="form-group"  >
                <input name="password" v-validate="'required|min:6'" v-model="password" type="password" placeholder="Password" :class="{'form-control is-invalid': !password, 'form-control is-valid': password}">
                <small v-show="errors.has('password')" class="text-danger"> {{ errors.first('password') }}</small>
            </div>
            <div class="form-group text-center">
                <b-button type='submit' :disabled="!isComplete" class="btn form-control" >Register</b-button>                    
            </div>
        </form>
    </b-modal>
  </div>                                             
</div>
</template>


<script>
import Datepicker from 'vuejs-datepicker';
import Axios from 'axios';
import { mapGetters } from 'vuex';




export default {
    components:{
        Datepicker
    },
        data(){
            return {
                name: '',
                email : '',
                department : '',
                birthday: '',
                password: '',
                submitted : false
            }
        },
    methods:{
        async registerUser(){
            await this.$store.dispatch('registerUser', {
                name : this.name,
                email : this.email,
                department : this.department,
                birthday: this.birthday,
                password : this.password
                });
            this.$router.push('/homepage');            
        }
/*         async registerUser() {
            try {
                const response = await Axios.post("http://localhost:3000/api/auth/signup", {
                    name : this.name,
                    email : this.email,
                    department : this.department,
                    birthday: this.birthday,
                    password : this.password
                });
                
                const allDatas = await response.data;
                console.log(allDatas);                
                }
                catch (error){
                console.log(error);                     
            }  
        }, */
    },
        computed: {
            ...mapGetters([
                'getDepartments'
            ]),

        isComplete(){
            return this.email && this.department && this.password && this.name;
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
