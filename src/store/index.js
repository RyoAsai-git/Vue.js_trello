import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const savedLists = localStorage.getItem('trello-lists')

const store = new Vuex.Store({
  state: {
    // JSON.parse(取得するデータ)でオブジェクトに変換
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
    }
  },
  actions: {
    //contextはstoreインスタンスのメソッドやプロパティ呼び出すオブジェクトを受け取ることができる引数
    addlist(context, payload) {
      context.commit('addlist', payload)
    }
  },
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