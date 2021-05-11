import Vue from 'vue'
import App from './App.vue'
import store from './store'
//ここでstyle.cssを読み込み
// 今回はグローバルなcssで読み込んでいるがコンポーネントごとにcssを適用する場合には
// <style scoped>でスコープ付きcssを定義できる
import './assets/css/styles.css'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
