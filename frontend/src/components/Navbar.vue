<template>
<div class="container-fluid">
<nav class="navbar navbar-expand-lg">
  <a class="navbar-brand" href="#"><img src="../assets/navigation-icon.png" alt=""></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">Hey</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Logout</a>
      </li>
    </ul>
  </div>
</nav>
</div>

</template>


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
