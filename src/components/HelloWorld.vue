<template>
 <b-nav class="navbar navbar"> 
     <img src="./pics/logo.jpg">
      <h1 class="navbar-header" ><b class="head">Life-Guards</b></h1> 
      <div>
        <b-button-group class="nav-item">
          <router-link to='/login'>
            <b-button variant="white"><b>Log-in</b></b-button></router-link>
          <router-link to='/register'>
            <b-button variant="white"><b>Register</b></b-button>
          </router-link>
        </b-button-group>
      </div>
      <br>
     
  </b-nav> 
</template>


<script>
export default {
  name: 'HelloWorld'
}
</script>
<style scoped>
.navbar{
  color: white;
  text-align: center;
  background: #1abc9c;
}
.btn{
  border-color: black;
  background-color:rgb(255, 255, 255);
}
div{
  position: absolute;
  top: 6px;
  right: 50px;
}
.btn:hover{
   box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
.head{
  position: absolute;
  top: 8px;
  left: 110px;
}
img{
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  width: 35px;
  position: absolute;
  border: 2px solid transparent;
  border-radius: 5px;
  left: 50px;
}
</style>
