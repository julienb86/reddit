<template>
<div class="row">

    <div class="row my-5">
        <div class="card col-md-6 offset-md-3">  
            <form class="form card-body" @submit.prevent="registerProfile()">
                <h3 class="text-center my-3 display-4">Profile</h3>
                <p class="text-center">Name : <span>{{ user.name }}</span></p>
                <p class="text-center">Department : <span>{{ user.department }}</span></p>
                <p class="text-center">Company : <span>Groupomania</span></p>
                <p class="text-center">Email : <span>{{ user.email }}</span></p>
                <p class="text-center" v-if="user.birthday">Birthday : <span >{{ user.birthday }}</span></p>
            </form>
            <div class="form-group text-center">
                <button @click="deleteAccount()" class="btn btn-danger">Delete Account</button>                    
            </div>
        </div>
    </div>
</div>
</template>

<script>
/* beforeRoutesEnter to oblige the user to fill this form before redirecting */
import Axios from 'axios';
import Datepicker from 'vuejs-datepicker';

export default {
      components: {
        Datepicker,

    },
    data(){
        return{
            user : this.$root.auth,
            birthday: ''
        }
            
    },
    methods : {
        async deleteAccount(){
            console.log(this.$route.params.id);
            
            try {
                const response = await Axios.delete(`http://localhost:3000/api/auth/user/${this.$route.params.id}`);
                console.log(response);
                const data = await response.data;
                this.$root.auth = {};
                localStorage.removeItem('auth');
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