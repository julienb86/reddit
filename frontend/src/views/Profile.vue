<template>
    <div class="row my-5">
        <div class="card col-md-6 offset-md-3">  
            <form class="form card-body" @submit.prevent="registerProfile()">
                <h3 class="text-center my-3 display-4">Profile</h3>
                <p class="text-center">Name : <span>{{ user.name }}</span></p>
                <p class="text-center">Department : <span>{{ user.department }}</span></p>
                <p class="text-center">Email : <span>{{ user.email }}</span></p>
                <p class="text-center" v-if="date">Birthday : <span >{{ date }}</span></p>

                <datepicker display= "none" class="form-group" placeholder="Date of birthday" :bootstrap-styling="true" :value="date" v-model="date" name="calendar"></datepicker>
                <div class="form-group" v-if="date">
                    <button class="btn btn-success form-control">Confirm</button>                    
                </div>
            </form>
            <div class="form-group text-center" v-if="!date">
                <button class="btn btn-warning">Edit Birthday</button>                    
            </div>
<!--             <div class="form-group text-center">
                <button class="btn btn-danger">Delete Account</button>                    
            </div> -->
        </div>
    </div>
</template>

<script>
/* beforeRoutesEnter to oblige the user to fill this form before redirecting */
import Datepicker from 'vuejs-datepicker';
import Axios from 'axios';

export default {

    components: {
        Datepicker
    },
    data(){
        return{
            user : this.$root.auth.user,
            date: '',
           
        }
            
    },
    methods : {
        async registerProfile(){
            
            try {
                const response = await Axios.post("http://localhost:3000/api/profile", {
                    birthday : this.date
                });
                console.log(response);
                const data = await response.data;
                this.$router.push('/');
                console.log(data);

                }
                catch (error){
                console.log(error);                 
            }   
        }
    }
}
</script>
