<template>
    <div class="left" id="navbarSupportedContent">
        <h2 class="mt-5 font-weight-bold d-none d-xl-block">Departments</h2>
        <ul class="navbar-nav"> 
            <li class="list-item" v-for="depart of getDepartments" :key="depart.id" @click="readPosts(depart)">
                <span :id="depart" :class="{'fas fa-circle unread-icon ' : unread(depart), 'fas fa-circle ': !unread(depart) }"></span>
                <router-link class="links ml-2" :to="`${depart}`">{{ depart }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapGetters, mapState, mapActions} from 'vuex';
import Axios from 'axios';

export default {
    mounted(){
        this.getDepartment;
        this.getUser();
        this.getUserRead;
        
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
            'getUserRead',
            'getOneUser'
        ]),
        user(){
            return this.$store.state.user.name;        
        },
        
    },
    methods :{
        getUser(){
            this.$store.dispatch('getUser');
        },
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
            for(let dep of this.getDepartment){
                if(departs === dep.depart && dep.userId != this.getUserId ){  
                    for(let id of this.getOneUser.read){
                        if(!this.getOneUser.read.includes(dep.postId)){
                            return true;
                        }   
                    }
                }
            }
        },

        async readPosts(depart){
            try{
                let reads = document.getElementById(`${depart}`);
                reads.style.color = "#EAE8E6";
                for(let article of this.getArticlesByDepartment(`${depart}`)){
                    const post = await this.$store.dispatch('readPost', {
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
.list-item{
    padding: 5px;
    font-size: 1.1em;

}
.links{
    text-decoration: none;
    color: #112240;
}
.fa-circle{
    color: #EAE8E6;
    font-size: 0.5rem;
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
    color: #112240;
}
@media (min-width: 992px) {
    .left{
    min-height: 100vh;
    }
}
@media (max-width : 768px){
    .left{
        width : 100%;
    }
}

</style>