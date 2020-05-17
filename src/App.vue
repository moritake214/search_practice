<template>
  <div class="container">
    <Search></Search>
    <Lists></Lists>
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
}

</script>
