<template>

        <div class="col-md-2 col-12 left" id="navbarSupportedContent">
<!--             <div class="text-center p-10">
                <img class="groupomania-icon" src="../assets/main-screen-icon.png" alt="navigation-icon" height="75px" width="75px">
            </div>
 -->

            <router-link to="Profile" class="nav-link d-block d-md-none float-right">{{ user }}</router-link>

            <ul class="col-12">
                <li v-for="depart of getDepartments" :key="depart.id" @click="read(depart)">
                    <i :id="depart" v-if="unread(depart)" class='fas fa-circle p-2 unread-icon' ></i>
                    <!-- <i v-else class="far fa-circle p-2 icon"></i>  -->                   
                    <router-link class="links" :to="`${depart}`">{{ depart }}</router-link>
<!--                     <br><span v-if="getUnReadPosts && depart === getDepartment">You have {{ getUnReadPosts }} notification</span>
 -->            </li>
            </ul>
        </div>
</template>

<script>
import {mapGetters, mapState, mapActions} from 'vuex';
import Axios from 'axios';

export default {
    computed : {
        ...mapGetters([
            'getDepartments',
            'getDepartment',
            'getUserId',
            'getArticlesByDepartment',
            'getArticles'
        ]),
        user(){
            return this.$store.state.user.name;        
        },
        
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
        },
        unread(departs){
            if(this.getDepartment != ""){
                for(let dep of this.getDepartment){
/*                     localStorage.setItem('read', JSON.stringify(this.getDepartment));
 */                    if(departs === dep.depart && dep.id != this.getUserId){   
                        return true;
                    }
                }
            }
        },
        read(depart){
            let read = document.getElementById(`${depart}`);
            read.classList.remove('fas', 'fa-circle', 'p-2', 'unread-icon');
            /* console.log(this.getArticlesByDepartment(`${depart}`).length); */
            
        },
    },
    watch : {
        getArticles(newValue, oldValue){
            console.log(oldValue, newValue);
            if(newValue > oldValue){
                console.log("new post");
                
            }
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
    max-height: 100vh;
    z-index: 1;
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