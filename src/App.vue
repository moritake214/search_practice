<template>
  <div class="container">
    <Search v-on:list-change="listdata = $event"></Search>
    <Lists :listdata="listdata"></Lists>
  </div>
</template>

<script>
// import Search from './components/Search.vue'
import Lists from './components/Lists.vue'
import Search from './components/Search.vue'

export default {
  name: 'App',
  components: {
    Lists,
    Search
  }
  // methods: {
  //   click(){
  //   console.log(listdata);
  //   }
  // }
}

</script>
