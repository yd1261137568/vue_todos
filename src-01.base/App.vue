<!--
<template>
  <div>
    <p>{{meg}}</p>
    <img src="./assets/logo.png" alt="logo">
    <HelloWorld />
  </div>

</template>
<script>
  import HelloWorld from './components/helloWorld.vue';
  export default {
    data () {
      return{
        meg: 'hello vue~~~'
      }
    },
    components:{
      HelloWorld
    }
  }
</script>
<style scoped>
  p{
    background: pink;
  }
</style>
-->
<template>
  <div>
    <h2>{{meg}}</h2>

    <img src="./assets/logo.png" alt="logo">
    <HelloWorld />
  </div>
</template>
<script>
  import HelloWorld from './components/helloWorld.vue';
  export default {
    data(){
      return{
        meg:'hello'
      }
    },
    components:{
      HelloWorld
    }
  }
</script>
<style>
  h2{
    color: red;
  }
</style>


<!--http://192.168.32.28:5000/-->
