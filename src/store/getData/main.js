import state from "./state.js";
import actions from "./actions.js";
import mutations from "./mutations.js";
import getters from "../getData/getters.js"

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
}