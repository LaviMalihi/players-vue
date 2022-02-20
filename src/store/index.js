import Vue from "vue";
import Vuex from 'vuex';
import Teams from "./Teams";
import Players from "./Players";

Vue.use(Vuex)
export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules:{
        Teams,
        Players
    }
})