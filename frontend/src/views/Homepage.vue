<template>
    <div class="row">
        <Navbar/>

        <Departments/>

        <Profile/>

        <router-view>
            <!-- links from Navbar -->
            <!-- links from Departments -->
        </router-view>
    </div>

</template>


<script>

import Navbar from '../components/Navbar'
import Departments from '../components/Departments'
import Profile from './Profile';
export default {
    components:{
        Navbar,
        Departments,
        Profile
    
    },


    
}
</script>

