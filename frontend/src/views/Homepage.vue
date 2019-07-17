<template>
<div class="container-fluid">
    <div class="row">
        <Navbar />
    </div>
    

<div class="row">
    <Departments />

    <router-view>
        <!-- links from Navbar -->
        <!-- links from Departments -->
    </router-view>
</div>

</div>


</template>


<script>
import Navbar from '../components/Navbar'
import Departments from '../components/Departments'
import {mapGetters, mapState, mapActions} from 'vuex'
export default {
        beforeRouteEnter(to, from, next){
        if(!localStorage.getItem("user")){
           return next({path: '/'});
        }
        next();
    },

    mounted(){
        this.$store.dispatch('getArticles'); 
        
    },
    components:{
        Navbar,
        Departments,
    },
    computed : {
        ...mapState([
            'articles'
        ])
    }


    
}
</script>

<style scoped>
.container-fluid{
  margin: 0;
  padding: 0;
}

</style>
