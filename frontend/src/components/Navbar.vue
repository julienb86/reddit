<template>
  <nav class="col-12 p-30 navbar navbar-expand-md">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fas fa-bars"></i>
    </button>
 
    <img src="../assets/navigation-icon.png" alt="navigation-icon" height="75px" width="75px" class="d-none d-md-block">

    <div class="navbar-nav d-block d-md-none">
          <router-link class="link" to="Profile">{{ user }}</router-link>

          <a @click="logout()" class="link mr-0" href="#">Log out</a>
    </div>

    <div class="collapse navbar-collapse" >
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="Profile">{{ user }}</router-link>
        </li>
        <li class="nav-item">
          <a @click="logout()" class="nav-link" href="#">Log out</a>
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
        },
        toggle(){
          $("#wrapper").show();
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
    font-size: 1.3rem;
}
.link{
  color: antiquewhite;
  text-decoration: none;
  margin: 0 30px;
}


</style>
