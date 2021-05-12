<template>
  <form class="addcard" @submit.prevent="addCardToList">
    <input v-model = "body"
      type="text"
      class="text-input"
      placeholder="Add new card"
    >
    <button type="submit" class="add-button">
      Add
    </button>
  </form>
</template>
<script>

</script>
