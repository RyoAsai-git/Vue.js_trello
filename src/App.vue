<template>
  <div id="app">
    <Board/>
  </div>
</template>

<script>
//importでBoardコンポーネントを呼び出し
import Board from './components/Board.vue'

export default {
  name: 'App',
  components: {
    //テンプレートでコンポーネントを呼び出すためにcomponentsプロパティへ名前を登録
    Board
  }
}
</script>
