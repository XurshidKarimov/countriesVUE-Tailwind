<template>
  <div class="container flex flex-col gap-y-5 max-w-7xl my-0 mx-auto py-10 px-5">

    <div class="control-panel flex">
      <button class="p-[5px] rounded-[10px] shadow-[0_0_2px_1px_rgba(100,100,100,.7)] transition linear duration-300 cursor-pointer dark:text-white" @click="switchTheme($event)">
        <span v-if="theme">Dark Mode</span>
        <span v-else>Light Mode</span>
      </button>
    </div>

    <ul class="grid grid-cols-grid-list-column gap-10">
    <li class="rounded-[10px] shadow-[0_0_2px_1px_rgba(150,150,150,.8)] transition linear duration-300 cursor-pointer overflow-hidden hover:scale-105" v-for="country, index in getterData" :key="index+1">
      <img class="w-full h-[230px]" :src="country.png" :alt="country.alt">
      <div class="card-content p-[10px] transition linear duration-300 dark:bg-zinc-900">
        <h3 class="dark:text-white"><span class="font-bold dark:text-white">Country:</span> {{ country.name }}</h3>
        <h3 class="dark:text-white"><span class="font-bold dark:text-white">Capital:</span> {{ country.capital }}</h3>
        <p class="dark:text-white"><span class="font-bold dark:text-white">Continent:</span> {{ country.continent }}</p>
        <p class="dark:text-white"><span class="font-bold dark:text-white">Population:</span> {{ country.population }}</p>
        <p class="dark:text-white"><span class="font-bold dark:text-white">Currency:</span> {{ country.currency }}</p>
      </div>
    </li>
  </ul>
  </div>
</template>


<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';


export default{
  data(){
    return{
      theme: true,
    }
  },
  methods: {
   ...mapActions('getDataModule', ['fetchData']),
   switchTheme(){
    let [html] = document.getElementsByTagName("html");
    html.classList.toggle("dark");
    this.theme = !this.theme;
  }
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
