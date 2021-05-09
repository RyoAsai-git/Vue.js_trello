import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const savedLists = localStorage.getItem('trello-lists')

const store = new Vuex.Store({
// export default new Vuex.Store({

  state: {
    lists: savedLists ? JSON.parse('savedLists'): [
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

store.subscribe((mutation, state) => {
  localStorage.setItem('trello-lists', JSON.stringify(state.lists))
})

export default store