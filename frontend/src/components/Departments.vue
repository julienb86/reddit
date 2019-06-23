<template>
        <div class="col-md-2 col-xm-4 left">
            <div class="text-center p-10">
                <img class="groupomania-icon" src="../assets/main-screen-icon.png" alt="navigation-icon" height="75px" width="75px">
            </div>

            <ul class="col-12" >
                <li v-for="depart in getDepartments" :key="depart.id">
                    <i v-if="depart === dep" class="fas fa-circle p-2 unread-icon" ></i>
                    <i v-else class="far fa-circle p-2 icon"></i>                    
                    <router-link class="links" :to="`${depart}`">{{ depart }}</router-link>
<!--                     <br><span v-if="getUnReadPosts && depart === getDepartment">You have {{ getUnReadPosts }} notification</span>
 -->                </li>
            </ul>
            <ul class="col-12">
                <li class="nav-item">
                    <router-link to="Profile">Hey {{  user }}</router-link>
                </li>
                <li class="nav-item">
                    <a @click="logout()" href="#">Logout</a>
                </li>
            </ul>
        </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Axios from 'axios';
export default {

        computed : {
        ...mapGetters([
            'getDepartments',
            'getUnReadPosts',
            'getDepartment'
        ]),
        user(){
            return this.$store.state.user.name;
        },
        dep(){
            this.getDepartment.forEach(dep => {
                console.log(dep.value);
                
                return dep.value;
                
            })
        }

    },
            methods :{
        logout(){
              this.$swal({
                title: 'Are you sure?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes!',
                cancelButtonText: 'No!',
                showCloseButton: true,
            }).then((result) => {
              if(result.value) {
                this.$swal('Logged out!', 'You successfully logged out', 'success');
                this.$store.commit('logout');
                this.$router.push('/');
              } else {
                this.$swal('Cancelled', 'You are still logged in', 'info')
              }
            });
        }
  }
}
</script>

<style scoped>
*{
    list-style: none;
}
.left{
    background-color:#EAE8E6;
    height: 100vh;
    position: sticky;
    top: 0;
}
.links{
    text-decoration: none;
}
.icon{
    color:#EAE8E6;
}
.unread-icon{
    color: rgb(70, 140, 180);
    font-size: 0.5rem;
}
.navbar{
  background-color: #112240;
}
.navbar-toggler{
  color: antiquewhite;
}
.nav-link{
    color: antiquewhite;
    font-size: 1.2em;
}

</style>