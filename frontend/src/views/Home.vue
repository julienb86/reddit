<template>
    <div class="row">
        <div class="col-md-6 left d-none d-sm-block">
          <div class="justify-content-center align-items-baseline d-flex flex-column content">
            <ul>
              <li>
                <h3>
                  <img class="img" src="../assets/newspaper.png" alt="newpaper-icon" height="50px" width="50px">Share News to colleagues
                </h3>         
              </li>
              <li>
                <h3>
                  <img class="img" src="../assets/colleague.png" alt="colleague-icon" height="50px" width="50px">Connect with your colleagues
                </h3>
              </li>
              <li>
                <h3>
                  <img class="img" src="../assets/megaphone.png" alt="megaphone-icon" height="50px" width="50px">Hear what your colleagues are saying
                </h3>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-6 my-auto">
            <div class="col-12 groupomania-icon">
              <img class="mx-auto d-block " src="../assets/main-screen-icon.png" alt="groupomania-icon" height="100px" width="100px">
            </div>
            <form class="col-md-8 offset-md-2 d-flex flex-column">
              <b-button id="register" class="btn btn-lg" @click="$bvModal.show('register')">Register</b-button>
              <b-button id="login" class="btn btn-lg" @click="$bvModal.show('login')">Login</b-button>
            </form>  

            <Register/>

            <Login/>

        </div>
    </div>
</template>
<script>

import Register from '../components/Register';
import Login from '../components/Login';

export default {
  name: 'app',
  components: {
    Register,
    Login
  },

}
</script>

<style scoped>

h3{
  margin: 50px;
}
.content{
  height: 100vh;
}

.content-icon{
  margin-right: 10px;
}
  .left{
    background-color: #112240;
    color: whitesmoke;
    padding: 0;
  }
  .btn{
    background-color: #112240;
    color: antiquewhite;
    border-radius: 20px;
    margin: 20px;
  }
  .btn:hover{
    background-color: white;
    color: #112240;
    border: 1px #112240 solid;
  }
  .img{
    margin-right: 20px;
  }

  .image{
      border: 1px solid;
  }

  .groupomania-icon{
    margin-bottom: 80px;
 /*    padding-top: 50px; */
  }
</style>