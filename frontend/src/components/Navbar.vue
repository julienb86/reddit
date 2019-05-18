<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="/">
    <img src="../assets/icon.png" alt="logo" width="75" height="75">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item" v-if="!isAuth"> 
        <router-link class="nav-link" to="/login" >Login</router-link>
      </li>
      <li class="nav-item" v-if="!isAuth">
        <router-link class="nav-link" to="/signup">Signup</router-link>
      </li>
      <li class="nav-item dropdown" v-if="isAuth">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Hey {{ isAuth.name }}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown" >
          <a class="dropdown-item" @click="logout()" >Logout</a>
          <router-link class="dropdown-item" to="/profile">Profile</router-link>
        </div>
      </li>
    </ul>
  </div>
</nav>
</template>


<script>
export default {
    computed : {
      isAuth(){
        return this.$root.auth.user;
      }
    },
    methods : {
      logout(){
        localStorage.removeItem("auth");
        this.$root.auth = {};
        this.$router.push('/signup');
      }
    }
}
</script>
