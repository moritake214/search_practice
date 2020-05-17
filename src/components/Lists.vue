<template>
  <div id="lists">  
    <div class="sorts-area">
      <select v-model="countrySelect">
        <option value="">国名</option>
        <option v-for="(value,key) in country" :key="key">
            {{ value }}
        </option>
      </select>    
      <select v-model="recommendSelect">
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
      <div v-for="(value, i) in price" :key="i">
        <input 
          type="checkbox" 
          :id="'vale' + i"
          :value="value"
          v-model="priceSelect"
        >
        <label for="'vale' + i">物価{{value}}</label>
      </div>
      <div>
        <input type="text" placeholder="キーワード検索" :value="searchWord">
      </div>
    </div>
    
    <ul>
      <li v-for="list in filteredTasks" :key = list.id>
        <img :src="list.img" alt="">
        <p>{{list.country}}</p>
        <p>オススメ度{{list.recommend}}</p>
        <p>物価{{list.price}}</p>
      </li>         
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
    lists: [
      {id: 1, 
      country: "australia", 
      recommend: "☆", 
      price: "☆☆", 
      img: require("@/assets/image/australia1.jpeg")
      },
      {id: 2, 
      country: "australia", 
      recommend: "☆☆☆",
      price: "☆☆", 
      img: require("@/assets/image/australia2.jpeg")
      },
      {id: 3, 
      country: "australia", 
      recommend: "☆☆",
      price: "☆☆☆", 
      img: require("@/assets/image/australia3.jpeg")
      },
      {id: 4, 
      country: "bolibia", 
      recommend: "☆☆",
      price: "☆☆", 
      img: require("@/assets/image/bolibia1.jpeg")
      },
      {id: 5, 
      country: "brazil", 
      recommend: "☆☆☆",
      price: "☆", 
      img: require("@/assets/image/brazil1.jpeg")
      },
      {id: 6, 
      country: "brazil", 
      recommend: "☆☆",
      price: "☆☆☆", 
      img: require("@/assets/image/brazil2.jpeg")
      },
      {id: 7, 
      country: "brazil", 
      recommend: "☆",
      price: "☆☆☆", 
      img: require("@/assets/image/brazil3.jpeg")
      },
      {id: 8, 
      country: "cambodia", 
      recommend: "☆",
      price: "☆☆", 
      img: require("@/assets/image/cambodia1.jpeg")
      },
      {id: 9, 
      country: "china", 
      recommend: "☆",
      price: "☆", 
      img: require("@/assets/image/china1.jpeg")
      },
      {id: 10, 
      country: "china", 
      recommend: "☆☆",
      price: "☆☆", 
      img: require("@/assets/image/china2.jpeg")
      },
      {id: 11, 
      country: "denmark", 
      recommend: "☆☆",
      price: "☆☆☆", 
      img: require("@/assets/image/denmark1.jpeg")
      },
      {id: 12, 
      country: "ecuador", 
      recommend: "☆☆☆",
      price: "☆☆☆", 
      img: require("@/assets/image/ecuador1.jpeg")
      },
      {id: 13, 
      country: "egypt", 
      recommend: "☆☆☆",
      price: "☆", 
      img: require("@/assets/image/egypt1.jpeg")
      },
      {id: 14, 
      country: "england", 
      recommend: "☆☆",
      price: "☆☆", 
      img: require("@/assets/image/england1.jpeg")
      },
      {id: 15, 
      country: "england", 
      recommend: "☆",
      price: "☆", 
      img: require("@/assets/image/england2.jpeg")
      },
      {id: 16, 
      country: "frace", 
      recommend: "☆",
      price: "☆☆", 
      img: require("@/assets/image/france1.jpeg")
      },
      {id: 17, 
      country: "frace", 
      recommend: "☆☆",
      price: "☆☆☆", 
      img: require("@/assets/image/france2.jpeg")
      },
      {id: 18, 
      country: "germany", 
      recommend: "☆☆☆",
      price: "☆", 
      img: require("@/assets/image/germany1.jpeg")
      },
      {id: 19, 
      country: "indonesia", 
      recommend: "☆☆",
      price: "☆☆", 
      img: require("@/assets/image/indonesia1.jpeg")
      },
      {id: 20, 
      country: "indonesia", 
      recommend: "☆☆☆",
      price: "☆☆☆", 
      img: require("@/assets/image/indonesia2.jpeg")
      },
      {id: 21, 
      country: "indonesia", 
      recommend: "☆",
      price: "☆☆", 
      img: require("@/assets/image/indonesia3.jpeg")
      },
      {id: 22, 
      country: "greace", 
      recommend: "☆☆☆",
      price: "☆", 
      img: require("@/assets/image/greace1.jpeg")
      },
      {id: 23, 
      country: "iran", 
      recommend: "☆☆☆",
      price: "☆☆", 
      img: require("@/assets/image/iran1.jpeg")
      },
      {id: 24, 
      country: "ireland", 
      recommend: "☆☆☆",
      price: "☆☆☆", 
      img: require("@/assets/image/ireland1.jpeg")
      },
      {id: 25, 
      country: "italy", 
      recommend: "☆",
      price: "☆☆☆", 
      img: require("@/assets/image/italy1.jpeg")
      },
      {id: 26, 
      country: "japan", 
      recommend: "☆",
      price: "☆☆☆", 
      img: require("@/assets/image/japan1.jpeg")
      },
      {id: 27, 
      country: "japan", 
      recommend: "☆☆☆",
      price: "☆☆☆", 
      img: require("@/assets/image/japan2.jpeg")
      },
      {id: 28, 
      country: "kazakhstan", 
      recommend: "☆",
      price: "☆", 
      img: require("@/assets/image/kazakhstan1.jpeg")
      },
      {id: 29, 
      country: "kyrgyzstan", 
      recommend: "☆☆",
      price: "☆☆", 
      img: require("@/assets/image/kyrgyzstan1.jpeg")
      },
      {id: 30, 
      country: "laos", 
      recommend: "☆☆☆",
      price: "☆", 
      img: require("@/assets/image/laos1.jpeg")
      },
      {id: 31, 
      country: "latvia", 
      recommend: "☆☆",
      price: "☆☆", 
      img: require("@/assets/image/latvia1.jpeg")
      },
      {id: 32, 
      country: "mexico", 
      recommend: "☆☆",
      price: "☆☆☆", 
      img: require("@/assets/image/mexico1.jpeg")
      },
      {id: 33, 
      country: "morocco", 
      recommend: "☆",
      price: "☆", 
      img: require("@/assets/image/morocco1.jpeg")
      },
      {id: 34, 
      country: "peru", 
      recommend: "☆☆",
      price: "☆☆☆", 
      img: require("@/assets/image/peru1.jpeg")
      },
      {id: 35, 
      country: "peru", 
      recommend: "☆",
      price: "☆", 
      img: require("@/assets/image/peru2.jpeg")
      },
      {id: 36, 
      country: "singapor", 
      recommend: "☆☆☆",
      price: "☆", 
      img: require("@/assets/image/singapor1.jpeg")
      },
      {id: 37, 
      country: "singapor", 
      recommend: "☆☆",
      price: "☆☆☆", 
      img: require("@/assets/image/singapor2.jpeg")
      },
      {id: 38, 
      country: "singapor", 
      recommend: "☆☆",
      price: "☆☆", 
      img: require("@/assets/image/singapor3.jpeg")
      },
      {id: 39, 
      country: "spain", 
      recommend: "☆☆",
      price: "☆☆", 
      img: require("@/assets/image/spain1.jpeg")
      },
      {id: 40, 
      country: "spain", 
      recommend: "☆",
      price: "☆☆", 
      img: require("@/assets/image/spain2.jpeg")
      },
      {id: 41, 
      country: "taiwan", 
      recommend: "☆☆",
      price: "☆☆", 
      img: require("@/assets/image/taiwan1.jpeg")
      },
      {id: 42, 
      country: "taiwan", 
      recommend: "☆☆",
      price: "☆", 
      img: require("@/assets/image/taiwan2.jpeg")
      },
      {id: 43, 
      country: "thailand", 
      recommend: "☆☆",
      price: "☆", 
      img: require("@/assets/image/thailand1.jpeg")
      },
      {id: 44, 
      country: "thailand", 
      recommend: "☆☆☆",
      price: "☆", 
      img: require("@/assets/image/thailand2.jpeg")
      },
      {id: 45, 
      country: "turkey", 
      recommend: "☆☆",
      price: "☆☆☆", 
      img: require("@/assets/image/turkey1.jpeg")
      },
      {id: 46, 
      country: "turkmenistan", 
      recommend: "☆☆",
      price: "☆", 
      img: require("@/assets/image/turkmenistan1.jpeg")
      },
      {id: 47, 
      country: "uzbekistan", 
      recommend: "☆☆☆",
      price: "☆", 
      img: require("@/assets/image/uzbekistan1.jpeg")
      },
      {id: 48, 
      country: "uzbekistan", 
      recommend: "☆☆",
      price: "☆☆", 
      img: require("@/assets/image/uzbekistan2.jpeg")
      },
      {id: 49, 
      country: "vietnum", 
      recommend: "☆☆",
      price: "☆", 
      img: require("@/assets/image/vietnum1.jpeg")
      }
    ],    
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
      var data = this.lists;
      var countryFilter = this.countrySelect;
      var recommendFilter = this.recommendSelect;
      var priceFilter = this.priceSelect;
      var filterWord = this.searchWord && this.searchWord.toLowerCase();
      if(countryFilter || recommendFilter || priceFilter || filterWord) {
        console.log(this.searchWord);
        console.log(filterWord);
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
              if (filterWord) {
                return Object.keys(row).some(function (key) {
                    if (String(row[key]).toLowerCase().indexOf(filterWord) > -1) {
                        return true;
                    }
                });
              }
              return row;
        })
      }
      return data;
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #lists{
    width: 80%;
    text-align: center;
  }
  ul{
    display: flex;  
    flex-wrap: wrap;
  }
  li{
    width: 200px;
    margin: 20px;
    list-style: none;
  }
  img{
    max-width: 100%;
  }
  .sorts-area{
    display: flex;
  }
  .sorts-area select{
    margin: 20px;
  }
  .sorts-area div{
    margin: 20px 10px;
  }
</style>
