<template>
  <router-view />
</template>

<script>
  import Home from  "./views/Home.vue"
  import SinglePage from "./views/SinglePage.vue";
  
  
  export default {
    components: {Home, SinglePage}
  }


</script>


<style scoped>

</style>