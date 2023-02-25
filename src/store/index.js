import { createStore } from 'vuex'
import getData from "../store/getData/main.js"

const store = createStore({
  modules: {
    getDataModule: getData
  },
})

export default store;
