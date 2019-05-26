<template>
    <div class="row">
        <Navbar/>

        <Departments/>


        <router-view>
            <!-- links from Navbar -->
            <!-- links from Departments -->
        </router-view>

    </div>
</template>


<script>

import Navbar from '../components/Navbar'
import Departments from '../components/Departments'

export default {
    components:{
        Navbar,
        Departments
    }
    
}
</script>
