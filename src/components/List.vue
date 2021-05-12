<template>
  <div class="list">
    <div class="listheader">
      <p class="list-title">{{ title }}</p>
      <div class="deletelist" @click="removeList">✖️</div>
    </div>

    <!-- カードの配列データをv-forディレクティブで展開 -->
    <!-- v-bindディレクティブを使ってバインドさせる -->
    <!-- このcardsデータは、List.vueは持っていないので、新たにBoard.vueからpropsで受け取る必要があります。 -->
    <card v-for="(item, index) in cards"
      :body="item.body"
      :key="item.id"
      :cardIndex="index"
      :listIndex="listIndex"
    />
    <card-add :listIndex="listIndex"/>
  </div>
</template>

<script>
  import CardAdd from './CardAdd'
  import Card from './Card'

  export default {
    components: {
      CardAdd,
      Card,
    },

    // propsには親コンポーネントから受け取るデータを定義する
    // 受け取ったデータはdataプロパティと同じようにアクセスできる
    props: {
      title: {
        // データの型指定
        // 文字列
        type: String,
        // 必ず受け取ることを指定
        required: true
      },
      
      //Board.vueからcardsデータを受け取り
      cards: {
        type: Array,
        required: true
      },

      listIndex: {
        type: Number,
        required: true
      }
    },
    
    methods: {
      removeList: function() {
        // confirm 確認ダイアログを表示
        if (confirm('本当にこのリストを削除しますか?')) {
          //index.jsのremovelistアクションを呼び出す
          this.$store.dispatch('removelist', { listIndex: this.listIndex })
        }
      },
    }
  }
</script>
