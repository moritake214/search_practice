<template>
  <div id="lists">  
    <ul>
      <!-- <p>{{listdata}}</p> -->
      <li v-for="list in listdata" :key = list.id>
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
    props: ["listdata"],
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
    ] 
    }
  },
  computed: {
    listdata() {
      return this.$store.state.listdata;
    }
  }
  // methods: {
  //   click(){
  //   console.log(listdata);
  //   }
  // }
  
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
