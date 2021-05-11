import Vue from 'vue'
import Vuex from 'vuex'

// Vuexを使用するには、Vue.jsの他のプラグインと同様にVue.jsでインスタンスを作る前に use メソッドで登録
Vue.use(Vuex)


// localStorage に保存されたデータには保持期間の制限はなく、
// sessionStorage に保存されたデータはセッションが終わると同時に（ブラウザが閉じられたときに）クリアされる
// localStorageは保存するデータを「キーと値」のセットで扱います。
const savedLists = localStorage.getItem('trello-lists')

  // Vuexでのデータの流れ
  // state には状態を
  // getters には state 内の状態を元に算出した値を返す関数
  // mutations には state のデータを更新する関数
  // actions にはミューテーションにデータをコミットする関数
const store = new Vuex.Store({
  // stateにはデータを格納
  // stateの参照はgettersで行うことができる
  state: {
    // JSON.parse(取得するデータ)でオブジェクトに変換
    // localStorageに保存されたリストがあれば取得、なければデフォルトのリスト配列を設置します。
    lists: savedLists ? JSON.parse(savedLists): [
      {
        title: 'Backlog',
        cards: [
          { body: 'English' },
          { body: 'Mathematics' },
        ]
      },
      {
        title: 'Todo',
        cards: [
          { body: 'Science' }
        ]
      },
      {
        title: 'Doing',
        cards: []
      }
    ] 
  },

  mutations: {
    //第一引数でstate, 第二引数ではコミット時に受け取るpayloadを指定できる
    addlist(state, payload) {
      state.lists.push({ title: payload.title, card: [] })
    },

    removelist(state, payload) {
      state.lists.splice(payload.listIndex, 1)
    },
  },
  actions: {
    //contextはstoreインスタンスのメソッドやプロパティ呼び出すオブジェクトを受け取ることができる引数
    // payloadはオブジェクト型で受け取ると、複数のプロパティを受け取ることができるため、推奨されています。
    addlist(context, payload) {
      context.commit('addlist', payload)
    },

    removelist(context, payload) {
      context.commit('removelist', payload)
    },
  },
  // アプリケーションの規模がある程度大きくなると、ストアの定義を複数のファイルに分割した方が見通し良い
  // 分割したファイル名をmodulesでまとめて定義してストアインスタンスを生成
  // modules: {
  // }
  getters: {

  }
})

// subscribeはストアのインスタンスメソッドで、全てのmutationの後に呼ばれる
// 第一引数にmutationインスタンス、第二引数にmutation後のデータの状態を受け取
store.subscribe((mutation, state) => {
  // JSON.stringify(保存するデータ)でJSON形式に変換
  localStorage.setItem('trello-lists', JSON.stringify(state.lists))
})

export default store