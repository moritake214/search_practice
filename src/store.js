import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listdata : [
      {id: 1, 
      country: "australia", 
      recommend: "☆", 
      price: "☆☆", 
      img: require("@/assets/image/australia1.jpeg")
      }
    ]
  }
})