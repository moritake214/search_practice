<template>
  <div class="sorts-area">
    <select v-model="countrySelect" class="sorts-item">
      <option value="">国名</option>
      <option v-for="(value,key) in country" :key="key">
          {{ value }}
      </option>
    </select>    
    <select v-model="recommendSelect" class="sorts-item">
      <option value="">オススメ度</option>
      <option v-for="(value,key) in recommend" :key="key">
          {{ value }}
      </option>
    </select>    
    <!-- <select v-model="priceSelect">
      <option value="">物価</option>
      <option v-for="(value,key) in price" :key="key">
          {{ value }}
      </option>
    </select>     -->
    <div v-for="(value, i) in price" :key="i" class="sorts-item">
      <input 
        type="checkbox" 
        :id="'vale' + i"
        :value="value"
        v-model="priceSelect"
      >
      <label for="'vale' + i">物価{{value}}</label>
    </div>
    <div class="sorts-item">
      <input type="text" placeholder="キーワード検索" :value="searchWord">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        countrySelect: '',
        recommendSelect: '',    
        priceSelect: [],
        searchWord: '',
        country: {
          1:'australia',
          2:'bolibia',
          3:'brazil',
          4:'cambodia',
          5:'china',
          6:'denmark',
          7:'ecuador',
          8:'egypt',
          9:'england',
          10:'frace',
          11:'germany',
          12:'indonesia',
          13:'greace',
          14:'iran',
          15:'ireland',
          16:'italy',
          17:'japan',
          18:'kazakhstan',
          19:'kyrgyzstan',
          20:'laos',
          21:'latvia',
          22:'mexico',
          23:'morocco',
          24:'peru',
          25:'singapor',
          26:'spain',
          27:'taiwan',
          28:'thailand',
          29:'turkey',
          30:'turkmenistan',
          31:'uzbekistan',
          32:'ivietnumran'
        },
        recommend: {
          1:'☆',
          2:'☆☆',
          3:'☆☆☆'
        },
        price: {
          1:'☆',
          2:'☆☆',
          3:'☆☆☆'
        },
      }
    },
    computed: {
      filteredTasks: function () {
        var data ;
        var countryFilter = this.countrySelect;
        var recommendFilter = this.recommendSelect;
        var priceFilter = this.priceSelect;
        var filterWord = this.searchWord && this.searchWord.toLowerCase();
        if(countryFilter || recommendFilter || priceFilter || filterWord) {
          data = data.filter(function (row) {
            // カテゴリー絞り込み
            if (countryFilter) {
                if (row['country'] !== countryFilter) {
                    return false;
                }                  
            }
            if (recommendFilter) {
              if (row['recommend'] !== recommendFilter) {
                return false;
                }
            }
            if (priceFilter[0]) {
                if (row['price'] !== priceFilter[0] && row['price'] !== priceFilter[1] && row['price'] !== priceFilter[2] ) {
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
            return row;
          })
        }
        return data
      }
    }
    // methods: {
    //   click(){
    //   console.log(filteredTasks);
    //   }
    // }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sorts-area{
    display: flex;
  }
  .sorts-item{
    margin: 0 20px;
  }
</style>
