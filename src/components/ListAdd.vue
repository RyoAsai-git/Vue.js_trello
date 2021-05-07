<template>
<!-- @はv-onの省略系 -->
<!-- .preventはVueのイベント修飾詞であり、サブミット時にリロードされるのを防ぐ -->
  <form action="addlist" @submit.prevent="addList">
    <input v-model="title"
      type="text"
      class="text-input"
      placeholder="Add_new_list"
    >
    <button type="submit" class="add-button">
      Add
    </button>
  </form>
</template>
<script>
  export default {
    data: function() {
      return {
        title: "",
      }
    },


  }
</script>
