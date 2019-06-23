<template>
<div class="container-fluid">
<!--     <div class="row">
        <Navbar/>
    </div> -->
    

<div class="row">
    <Departments/>

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
export default {

    components:{
        Navbar,
        Departments,

    
    },


    
}
</script>

<style scoped>
.container-fluid{
  margin: 0;
  padding: 0;
}
</style>
