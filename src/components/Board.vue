<template>
  <div>
    <header>
      my Trello
    </header>
    <main>
      <p class="info-line">All: 0 tasks</p>
      <div class="list-index">
        <!-- : v-bind:の省略系 -->
        <!-- indexは要素が削除された場合に値が変わってしまう。 -->
        <!-- item.idのように一意で変わることのないidを設定するのが良い -->
        <list v-for="(item, index) in lists"
          :key = "item.id"
          :title = "item.title"
          :cards = "item.cards"
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
  
  //export defaultを宣言することでこのコンポーネントを他のコンポーネントからimportして利用することができる
  export default {
    components: {
      ListAdd,
      List,
    },
    // computedプロパティでindex.jsのstateのリストデータlistsを取得
    computed: {
      // index.jsのthis.$store.stateでアクセスすることもできるがこれを複数書くとコードが助長になる
      // ...オブジェクトスプレッド演算子 computedのローカルのオブジェクトと一緒に定義できる
      // mapStateはこのオブジェクトスプレッド演算子を使わないと、オブジェクトを持ったオブジェクト（ネストされた状態）を返してしまい、computedはmapStateに定義された値を参照できない
      ...mapState([
        'lists'
      ]),
    },
  }
</script>
