import { createStore } from 'vuex'
import { getData } from "./getData/main"

const store = createStore({
  modules: {
    getDataMoudle: {
      getData
    }
  },
})

export default store;
