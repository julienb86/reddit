<template>
  <nav class="col-12 navbar navbar-expand-lg">
    <router-link to="/" class="navbar-brand"><img src="../assets/navigation-icon.png" alt="navigation-icon" height="75px" width="75px"></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="Profile">Hey {{ user }}</router-link>
        </li>
        <li class="nav-item">
          <a @click="logout()" class="nav-link" href="#">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

export default {
  computed:{
    user(){
      return this.$store.state.user.name;
      }
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
        }
  }
}
</script>



<style scoped>

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
