<template>
  <div class="test-container page-container">
    <div class="page-title">This is an about page</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'About'
})
</script>

<style scoped lang="stylus">
button {
  cursor pointer
  font-size 20px
  padding 5px
}
</style>
