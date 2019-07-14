<template>

        <div class="col-md-2 col-12 left" id="navbarSupportedContent">
<!--             <div class="text-center p-10">
                <img class="groupomania-icon" src="../assets/main-screen-icon.png" alt="navigation-icon" height="75px" width="75px">
            </div>
 -->

            <router-link to="Profile" class="nav-link d-block d-md-none float-right">{{ user }}</router-link>

            <ul class="col-12">
                <li v-for="depart of getDepartments" :key="depart.id" @click="readPosts(depart)">
                    <i :id="depart" :class="{'fas fa-circle p-2 unread-icon' : unread(depart)} "></i>
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
    mounted(){
        console.log("mounted");
        /* get the length of the articles */

        console.log(this.getArticles);
        
        
    },
    computed : {
        ...mapGetters([
            'getDepartments',
            'getDepartment',
            'getUserId',
            'getArticlesByDepartment',
            'getArticles',
            'getPosts',
            'getReadPosts',
            'getUserRead'
        ]),
        user(){
            return this.$store.state.user.name;        
        },
        
    },
        methods :{
            ...mapActions([
                'read'
            ]),
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
                    for(let read of this.getUserRead){
                        if(!read){
                            if(departs === dep.depart && dep.userId != this.getUserId){   

                                return true;
                                
                            }
                        }
                    }                  


                }
            }
    },
 /*        reads(depart){

            const readArticles = this.getArticlesByDepartment(`${depart}`);
            for(let article of readArticles){
                        // Get the existing data
            var existing = JSON.parse(localStorage.getItem('read'));

            // If no existing data, create an array
            // Otherwise, convert the localStorage string to an array
            existing = existing ? existing : [];

            // Add new data to localStorage Array
            existing.push(article._id);

            // Save back to localStorage
            localStorage.setItem('read', JSON.stringify(existing));

            let read = document.getElementById(`${depart}`);
            read.classList.add('fas', 'fa-circle', 'p-2', 'unread-icon', 'd-none');
            }
            

                } */

        async readPosts(depart){
            try{
                    let read = document.getElementById(`${depart}`);
                    read.classList.add('fas', 'fa-circle', 'p-2', 'unread-icon', 'd-none');
                for(let article of this.getArticlesByDepartment(`${depart}`)){
                    console.log(article);
                    
                    await this.$store.dispatch('readPost', {
                        read : article._id
                    });

                }
            }catch(error){
                console.log(error);
                
            }
            
        }
 
    },

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