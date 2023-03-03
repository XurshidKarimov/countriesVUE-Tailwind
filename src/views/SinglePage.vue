<template>
    <div class="h-screen w-full flex items-center justify-between">
        <div class="m-w-4xl flex">
            <img class="single__page-img m-w-[65%]" :src="this.singleData.flag" :alt="this.singleData.alt">
            <div class="card-content p-[10px] transition linear duration-300 dark:bg-zinc-900">
                <h3 class="dark:text-white"><span class="font-bold dark:text-white">Name: </span>{{ this.singleData.name }}</h3>
                <h3 class="dark:text-white"><span class="font-bold dark:text-white">Capital: </span>{{ this.singleData.capital }}</h3>
                <p class="dark:text-white"><span class="font-bold dark:text-white">Continent: </span>{{ this.singleData.continent }}</p>
                <p class="dark:text-white"><span class="font-bold dark:text-white">Population: </span>{{ this.singleData.population }}</p>
                <p class="dark:text-white"><span class="font-bold dark:text-white">Currency: </span>{{ this.singleData.currency }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { mapActions } from 'vuex';
    import { mapState } from 'vuex';

    export default{
       props: ['name'],
       methods: {
        ...mapActions('getDataModule', ['fetchSingleData']),
       },
       computed: {
        ...mapGetters('getDataModule', ['getSingleData']),
        ...mapState('getDataModule', ['singleData'])
       },
       beforeMount(){
          this.fetchSingleData(this.name);
        },
    }

</script>

<style>
    
</style>