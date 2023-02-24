import { createStore } from 'vuex'
import axios from 'axios';
const bStoreURL = "https://joelapp.onrender.com/";
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    showSpinner: true,
    message: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, values) {
      state.users = values
    },
    setUser(state, values) {
      state.user = values
    },
    setProducts(state, values) {
      state.products = values
    },
    setProduct(state, values) {
      state.product = values
    },
    setSpinner(state, values) {
      state.showSpinner = values
    },
    setMessage(state, values) {
      state.message = values
    },
    
  },
  actions: {
    async login(context, payload){
      const res = await axios.post(`${bStoreURL}login`, payload);
      const {result, err} = await res.data;
      if (result) {
        context.commit('setUser', result);
      } else {
        context('setUser', err);
      }
    },
    async register(context, payload) {
      let res = await axios.post(`${bStoreURL}register`, payload);
      let {msg, err} = await res.data;
      if (msg) {
        context.commit('setMessage', msg);
      } else {
        context.commit('setMessage', err);
      }
    },
    // async fetchUser(context) {

    // }
  },
  modules: {
  }
})
