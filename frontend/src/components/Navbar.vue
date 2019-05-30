<template>
<div class="container-fluid h-100">
  <nav class="navbar navbar-expand-lg">
    <router-link to="/" class="navbar-brand"><img src="../assets/navigation-icon.png" alt="navigation-icon" height="75px" width="75px"></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Hey {{  user }}</a>
        </li>
        <li class="nav-item">
          <a @click="logout()" class="nav-link" href="#" >Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</div>

</template>

<script>

export default {
  computed:{
    user(){
      return this.$store.state.user.name;
    },
    logout(){
      this.$store.commit('logout');
      this.$router.push('/');
    }
  },
}
</script>



<style scoped>
.container-fluid{
  margin: 0;
  padding: 0;
}
.navbar{
  background-color: #112240;
}
.nav-link{
    color: antiquewhite;
    font-size: 1.2em;
}
</style>
