<template>
  <div>
    <h2> click {{count}} times, count is {{evenOrAdd}} </h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">isOdd</button>
    <button @click="incrementAsync">async</button>
  </div>
</template>
<script>

  export default {
    data () {
      return {
        count:0
      }
    },
    methods : {
      increment () {
        this.count ++
      },
      decrement () {
        this.count --
      },
      incrementIfOdd () {
        if(this.count % 2 ===1){
          this.count ++
        }
      },
      incrementAsync () {
        setTimeout(() => {
          this.count ++
        },1000)
      },
    }
  }
</script>

<style scoped>

</style>
