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
  import {mapState,mapGetters,mapActions} from 'vuex';
  export default {
//    created(){
//      console.log(this.$store);
//    },
    computed : {
      ...mapState(['count']),
      ...mapGetters(['evenOrAdd']),

    /*  count () {
        return this.$store.state.count;
      },
      evenOrAdd () {
        return this.$store.getters.evenOrAdd;
      }*/
    },
    methods : {
      ...mapActions(['increment','decrement','incrementIfOdd','incrementAsync'])
     /* increment () {
        this.$store.dispatch('increment')
      },
      decrement () {
        this.$store.dispatch('decrement')
      },
      incrementIfOdd () {
        this.$store.dispatch('incrementIfOdd')
      },
      incrementAsync () {
        this.$store.dispatch('incrementAsync')
      },*/
    },

  }
</script>

<style scoped>

</style>
