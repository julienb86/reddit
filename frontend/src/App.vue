<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>

import Navbar from '@/components/Navbar'

export default {
  name: 'app',
  components: {
   Navbar
  }
}
</script>

<style>
body{
  background-color: rgb(231, 231, 255);
}
</style>
