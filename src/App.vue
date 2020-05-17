<template>
  <div class="container">
    <!-- <select v-model="selectCategory">
      <option value="">カテゴリー</option>
      <option v-for="(value,key) in categories" :key="key">
          {{ value }}
      </option>
    </select> -->
    <Lists></Lists>
  </div>
</template>

<script>
// import Search from './components/Search.vue'
import Lists from './components/Lists.vue'

export default {
  name: 'App',
  components: {
    Lists
  },
  data() {
    return {
      eventData:{
        target: []
      },
      selectCategory: '',
      categories: {
          1:'カテゴリー1',
          2:'カテゴリー2',
          3:'カテゴリー3'
      },
    }
  },
  computed: {
    filteredTasks: function () {
      var data = this.tasks;
      // var filterWord = this.searchWord && this.searchWord.toLowerCase();
      var filterCategory = this.selectCategory && Number(this.selectCategory);
      if(this.selectCategory) {
          data = data.filter(function (row) {
              // カテゴリー絞り込み
              if (filterCategory) {
                  if (row['category'] !== filterCategory) {
                      return false;
                  }
              }
              // キーワード絞り込み
              // if (filterWord) {
              //     return Object.keys(row).some(function (key) {
              //         if (String(row[key]).toLowerCase().indexOf(filterWord) > -1) {
              //             return true;
              //         }
              //     });
              // }
              // 
              return row;
          })
      }
      return data;
    }
  }
}

</script>

<style>
  .container{
    display: flex;
  }
</style>
