<template>
  <div>
    <div>home</div>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link to="/home/news">News</router-link>
        </li>
        <li>
          <router-link to="/home/message">Message</router-link>
        </li>
      </ul>
      <router-view />
    </div>
  </div>

</template>
<script>
  export default {

  }
</script>
<style scoped>

</style>
