import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  //stateにはデータを格納
  state: {
    count: 0
  },

  //stateの更新はgettersの関数で行う
  //第一引数にstateが渡されるのでここから参照する
  // getters は主にstateのデータを加工して表示したいときに使用
  getters: {
    countWithSuffix(state) {
      return `${state.count} 回`
    }
  },

  // gettersに登録した関数の第二引数に getters に登録した他のゲッター関数が渡される
  // 以下のようにゲッター関数を組み合わせることもできる
  // getters: {
  //   countWithSuffix(state, getters) {
  //     return `${getters.countWithPrefix} 回`
  //   },
  //   countWithPrefix(state) {
  //     return `第 ${state.count}`
  //   }
  // },

  // stateの更新はmutationsで行う
  // mutations関数の呼び出しとしてストアのcommit関数を用いて発火
  // mutations内の関数の第一引数でstateが更新される
  // stateは他の関数に第一引数として渡されて参照と更新を行っていく
  mutations: {
    increment(state) {
      state.count++
    }
  },

  //mutationsをコミットする関数を登録
  actions: {
    //引数として渡されるcontextオブジェクトはそこを経由してstore や getters も参照することが可能
    increment(context) {
      // mutationsの関数を実行するためには commit 関数を実行します
      context.commit('increment')
    }
  }
})

const app = new Vue({
  el: '#app',
  computed: {
    showCounter() {
      return this.$store.getters.countWithSuffix
    }
  },
  store,
  methods: {
    // actions の関数を実行するには dispatch関数をVueのインスタンスで実行します。
    // dispatch関数もcommitと同じように実行する関数名を指定して実行
    increment() {
      this.$store.dispatch('increment')
    }
  }
})

// このようにしてデータを アクション → ミューテーション → ステート と渡していくことが出来ます。