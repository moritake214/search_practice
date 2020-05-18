<template>
  <div id="lists">  
    <ul>
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
  computed: {
    listdata() {
      return this.$store.state.listdata
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
