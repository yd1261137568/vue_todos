<template>
  <ul>
    <li>id:{{$route.params.id}}</li>
    <li>title:{{messageDetail.title}}</li>
    <li>content:{{messageDetail.content}}</li>
  </ul>
</template>
<script>
  const allMessageDetails = [
    {id:1,title:'message001',content:'message content001'},
    {id:3,title:'message003',content:'message content003'},
    {id:5,title:'message005',content:'message content005'},
  ];
  export default {
  /*  data () {
      return {
        messageDetail:{}
      }
    },*/
    computed:{
      messageDetail () {
        const id = this.$route.params.id * 1;
        return allMessageDetails.find(md => md.id === id)
      }
    }
  }
</script>
<style scoped>

</style>
