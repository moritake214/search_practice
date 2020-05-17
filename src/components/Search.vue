<template>
  <div id="search">
    <div>
      <span>エリア</span>
      <ul>
        <li>ヨーロッパ</li>
        <li>アジア</li>
        <li>南米</li>
        <!-- <li>その他</li> -->
      </ul>
    </div>
    <div>
      <span>おすすめ度</span>
      <ul>
        <li>★★★</li>
        <li>★★☆</li>
        <li>★☆☆</li>
      </ul>
    </div>
    <div>
      <span>危険度</span>
      <ul>
        <li>★★★</li>
        <li>★★☆</li>
        <li>★☆☆</li>
      </ul>
    </div>
    
    <!-- <input type="checkbox" id="10" value="10大" v-model="eventData.target">
    <label for="10">10大</label>
    <input type="checkbox" id="10" value="20大" v-model="eventData.target">
    <label for="20">20大</label>
    <input type="checkbox" id="10" value="30大" v-model="eventData.target">
    <label for="30">30大</label> -->
    <!-- <p>{{eventData.target}}</p> -->
  </div>
</template>

<script>
  export default {

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #search{
    width: 20%;
  }
</style>
