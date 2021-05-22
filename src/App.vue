<template>
  <div id="app">
    <HelloWorld/>
    

  <marquee><p class="h4">"Show your gratitude towards our life-guards"</p></marquee>
  <MainPage/>
  <router-view />
   
   <br>
   <br>
   <br>
   <br>
   <br>
   <br>
   <br>
   <br>
   <br>
   <br>
   <br>
   <br>
   <br>
   <br>
   <br>
   <br>
   <br>
   <br>
   <br>
   <br>
   <br>
   <br>
   <br>
   <br>
   <br>
   <br>
   <br>
   <br>
  
   <br>
   <br>
   <br>
   <br>
   <br>
   <br>
   <br>
   <br>
   <br>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import MainPage from './components/MainPage'
//import res from './components/reg';

export default {
  name: 'App',
  components: {
    HelloWorld,
    MainPage
  },
  data(){
 
    
}
}
</script>

<style>
#app{
    position: relative;
    z-index: 1;
}
#app::before{
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url(./components/pics/doc.jpg) center center;
    background-color:#bfdffd;
    background-repeat: no-repeat;
    opacity: .3;
}


</style>
