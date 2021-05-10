<template>
  <div>
    <header>
      my Trello
    </header>
    <main>
      <p class="info-line">All: 0 tasks</p>
      <div class="list-index">
        <!-- : v-on:の省略系 -->
        <list v-for="(item, index) in lists"
          :key = "item.id"
          :title = "item.title"
          :listIndex = "index"
        />
        <list-add />
      </div>
    </main>
  </div>
</template>
<script>
  import ListAdd from './ListAdd.vue'
  import List from './List'
  import { mapState } from 'vuex'
  
  export default {
    components: {
      ListAdd,
      List,
    },
    computed: {
      // ...オブジェクトスプレッド演算子 computedのローカルのオブジェクトと一緒に定義できる
      ...mapState([
        'lists'
      ]),
    },
  }
</script>
