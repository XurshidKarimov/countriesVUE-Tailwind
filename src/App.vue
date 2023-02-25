<template>
  <button @click="startGetData()">Start</button>
  <ul>
    <li v-for="country in getterData" :key="country.tld">
      <h3>{{ country.name.common }}</h3>
    </li>
  </ul>
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
