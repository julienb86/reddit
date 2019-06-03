<template>
<div class="row col-4 offset-3 mx-auto">
        <div class="">  
            <form class="form" @submit.prevent="registerProfile()">
                <div class="d-flex my-5 justify-content-around">
                    <img class="img flex-1" src="../assets/profile-icon.png" alt="newpaper-icon" height="100px" width="100px">
                    <h2 class="my-auto">{{getUser}}</h2>
                </div>
                <h3 class="text-center">Department : <span>{{ getUserDepartment }}</span></h3>
                <h3 class="text-center">Email : <span>{{ getUserEmail }}</span></h3>
                <h3 class="text-center" v-if="getUserBirthday">Birthday : <span >{{ getUserBirthday }}</span></h3>
            </form>
            <div class="form-group text-center">
                <button @click="deleteAccount()" class="btn btn-danger">Delete Account</button>                    
            </div>
        </div>
</div>

</template>

<script>
/* beforeRoutesEnter to oblige the user to fill this form before redirecting */
import Axios from 'axios';
import Datepicker from 'vuejs-datepicker';
import {mapGetters} from 'vuex';
export default {
      components: {
        Datepicker,

    },
    data(){
        return{
            
        }
            
    },
    methods : {
        deleteAccount(){
            this.$store.dispatch('deleteAccount');
            this.$router.push("/");
        }
    },
    computed : {
        ...mapGetters([
            'getUser',
            'getUserDepartment',
            'getUserEmail',
            'getUserBirthday'
        ])
    }
}
</script>


<style scoped>

</style>
