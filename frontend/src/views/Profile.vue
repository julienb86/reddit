<template>
<div class="row col-4 offset-3 mx-auto">
        <div>  
            <form class="form" @submit.prevent="registerProfile()">
                <div class="d-flex my-5 justify-content-around">
                    <img class="img flex-1" src="../assets/profile-icon.png" alt="newpaper-icon" height="100px" width="100px">
                    <h2 class="my-auto">{{getUser}}</h2>
                </div>
                <h3 class="text-center">Department : <span>{{ getUserDepartment }}</span></h3>
                <h3 class="text-center">Email : <span>{{ getUserEmail }}</span></h3>
                <h3 class="text-center" v-if="getUserBirthday">Birthday : <span >{{ getUserBirthday |  moment("YYYY/MM/DD")  }}</span></h3>
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
    methods : {
        deleteAccount(){
          this.$swal({
            title: 'Are you sure?',
            text: 'You can\'t revert your action',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes Delete my account!',
            cancelButtonText: 'No, Keep it!',
            showCloseButton: true,
        }).then((result) => {
          if(result.value) {
            this.$swal('Deleted', 'You successfully deleted your account', 'success');
            this.$store.dispatch('deleteAccount');
            this.$router.push("/");
          } else {
            this.$swal('Cancelled', 'Your account is still intact', 'info')
          }
        });

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

