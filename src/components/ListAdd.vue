<template>
<!-- @はv-onの省略系 -->
<!-- submitイベント時にaddListイベントをハンドル -->
<!-- v-onディレクティブでイベントをハンドルできる -->
<!-- .preventはVueのイベント修飾詞であり、サブミット時にリロードされるのを防ぐ -->

<!-- v-bind:class classList配列をclassにデータバインディング -->
  <form :class="classList" @submit.prevent="addList">
    <!-- v-modelにtitleと定義することでdataとバインド -->
    <!-- 双方向データバインディング -->
    <input v-model="title"
            type="text"
            class="text-input"
            placeholder="Add new list"
            @focusin="startEditing"
            @focusout="finishEditing"
    >
    <!-- startEditingとfinishEditingですが@focusinと@focusoutのイベントに紐づいて処理を行なっている部分なので役割的にmethodsを使うことになります。（データを加工して表示する部分ではない） -->
    
    <!-- dataにtrueまたはfalseを代入しているだけなので、
    下記のように処理を書くことも可能 -->
    <!-- @focusin="isEditing = true" -->
    <!-- @focusout="isEditing = false" -->

    <!-- v-ifでフォームが活性の時（isEditing）と、テキストが入力された時(titleExists)に -->
    <!-- ボタンが表示される -->
    <button type="submit"
        class="add-button"
        v-if="isEditing || titleExists">
      Add
    </button>
  </form>
</template>
<script>
  export default {
    data: function() {
      return {
        title: '',
        isEditing: false,
      }
    },

    // computedの仕組みは、値が変わるとその値に依存しているすべてのバインディングが更新されます。
    // formにフォーカスする度、それに依存しているcomputedのclassListが実行される
    computed: {
      classList() {
        const classList = ['addlist']
        if (this.isEditing) {
          classList.push('active')
        }
        if (this.titleExists) {
          classList.push('addable')
        }
        
        return classList
      },
        //dataのtitleプロパティに値が入っていた時にtrueを返す
        titleExists() {
          return this.title.length > 0
        }
    },
    
    methods: {
      addList: function() {
        //this.$store.dispatch('アクション名')でactionsを実行
        // dispatch 第二引数でオブジェクト型でdataプロパティのtitleを渡す
        this.$store.dispatch('addlist', { title: this.title })
        this.title = ''
      },

      startEditing() {
        this.isEditing = true
      },
      finishEditing() {
        this.isEditing = false
      },
    }
  }

  // computedは監視しているdataに依存しているので、そのdataが変化したときにだけ処理が実行されます。
  // computedはキャッシュされる
  // Date.now()で今日の日付を取得したり、Math.random()でランダムな数値を取得するときはキャッシュが効いて一度表示された値から変わりません！
  // dataを加工してテンプレートで使用したいという時は基本的にcomputedでいいのかなと思います！（Date.now()やMath.random()のようにキャッシュが効いてほしくない時は除く）

  // methodsは再描画されたときなど呼び出されるたびに処理が実行されます。
</script>

