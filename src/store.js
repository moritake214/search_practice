import Vue from 'vue';
import Vuex from 'vuex';
import listdata from './assets/listdata.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listdata: listdata
  },
  mutations: {
    changeListdata(state, filter){
      var data = listdata
      // console.log("s");
      // console.log(data);
      // var filterWord = this.searchWord && this.searchWord.toLowerCase();
      // console.log(filter.priceSelect);
      // console.log(filter.recommendSelect);
      // console.log(filter.priceSelect);
      if(filter.countrySelect || filter.recommendSelect || filter.priceSelect) {
        // console.log(data);
        data = data.filter(function (row) {
          // カテゴリー絞り込み
          // console.log("d");
          if (filter.countrySelect) {
            // console.log("a");
              if (row['country'] !== filter.countrySelect) {
                  return false;
              }
            // console.log(data);
          }
          if (filter.recommendSelect) {
            // console.log("b");
            if (row['recommend'] !== filter.recommendSelect) {
              return false;
              }
          }
          if (filter.priceSelect[0]) {
            // console.log("c");
              if (row['price'] !== filter.priceSelect[0] && row['price'] !== filter.priceSelect[1] && row['price'] !== filter.priceSelect[2] ) {
                  return false;
              }
          }
          // キーワード絞り込み
          // if (filterWord) {
          //   return Object.keys(row).some(function (key) {
          //       if (String(row[key]).toLowerCase().indexOf(filterWord) > -1) {
          //           return true;
          //       }
          //   });
          // }
          // console.log(row);
          return row;
        })
      }
      // console.log(data);
      state.listdata = data
    }
  }
})