<template>
  <div id="lists">  
    <ul>
      <li v-for="(list, i) in filterItems" :key = i>
        <img :src="list.img" alt="">
        <p>{{list.country}}</p>
        <p>オススメ度{{list.recommend}}</p>
        <p>物価{{list.price}}</p>
        <!-- <p>{{listlist}}</p> -->
      </li>         
    </ul>
    <prev-next :page="createList.page" :totalPage="createList.totalPage" @change="onPageChange" />
  </div>
</template>

<script>
  import PrevNext from './pagenation/prev-next.vue';
  export default {
    components: {
      PrevNext
    },
    // data() {
    //   const listlist = this.createList;
    //   return listlist.lists
    // },
    computed: {
      createList() {
        const lists = this.$store.state.listdata;
        const perPage = 10;
        return {
          lists,
          page: 1,
          perPage,
          totalPage: Math.ceil(lists.length / perPage),
          count: lists.length
        }
      },
      // watch: {
      //   createList: function() {
      //     console.log('uuu');
      //   }
      // },
      filterItems: {
        get: function() {
          console.log(this.createList.page + 100);
          return this.createList.lists.slice((this.createList.page - 1) * this.createList.perPage, this.createList.page * this.createList.perPage);
        },
        set: function(page) {
          this.createList.page = page;
          console.log(this.createList.page + 10);
          // this.filterItems = this.createList.lists.slice((page - 1) * this.createList.perPage, page * this.createList.perPage);
        } 
      }
      // filterItems() {
      //   return this.createList.lists.filter(
      //     (item, i) =>
      //       i >= (this.createList.page - 1) * this.createList.perPage &&
      //       i < this.createList.page * this.createList.perPage
      //   );
      // }
    },
    methods: {
      onPageChange(page) {
        console.log(this.filterItems.set);
        this.filterItems = page;

        // this.$set(this.createList.page, page, "$setで変更済み");
        // this.fruits.splice(index, 1, "spliceで変更済み");
        window.history.replaceState(
          { page },
          `Page${page}`,
          `${window.location.origin}/?page=${page}`
        );
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
