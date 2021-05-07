import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: []
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
