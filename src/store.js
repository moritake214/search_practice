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
      if(filter.countrySelect || filter.recommendSelect || filter.priceSelect || filter.searchWord) {
        data = data.filter(function (row) {
          // カテゴリー絞り込み
          if (filter.countrySelect) {
              if (row['country'] !== filter.countrySelect) {
                  return false;
              }
          }
          if (filter.recommendSelect) {
            if (row['recommend'] !== filter.recommendSelect) {
              return false;
              }
          }
          if (filter.priceSelect[0]) {
              if (row['price'] !== filter.priceSelect[0] && row['price'] !== filter.priceSelect[1] && row['price'] !== filter.priceSelect[2] ) {
                  return false;
              }
          }

          // キーワード絞り込み
          if (filter.searchWord) {
            return Object.keys(row).some(function (key) {
                if (String(row[key]).toLowerCase().indexOf(filter.searchWord) > -1) {
                    return true;
                }
            });
          }
          return row;
        })
      }
      state.listdata = data
    }
  }
})