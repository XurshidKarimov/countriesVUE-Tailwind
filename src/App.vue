<template>
  <div class="container max-w-7xl my-0 mx-auto py-0 px-5">
    <ul class="grid grid-cols-grid-list-column gap-10">
    <li class="bg-slate-500 cursor-pointer" v-for="country, index in getterData" :key="index+1">
      <img class="" :src="country.svg" :alt="country.alt">
      <h3>Country: {{ country.name }}</h3>
      <h3>Capital: {{ country.capital }}</h3>
    </li>
  </ul>
  </div>
</template>


<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';


export default{
  methods: {
   ...mapActions('getDataModule', ['fetchData']),
  },
  computed: {
    ...mapGetters('getDataModule', ['getterData']),
  },
  mounted(){
    this.fetchData();
  }
}
  

 


</script>


<style lang="scss">

</style>
