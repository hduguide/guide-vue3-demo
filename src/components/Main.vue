<template>
  <div class="body">
    <header class="header">
      <Header />
    </header>
    <section class="content">
      <router-view />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'

export default defineComponent({
  name: 'Main',
  components: {
    Header
  }
})
</script>

<style scoped>
.body {
  display: flex;
  flex-flow: column nowrap;
  /* height: 100%; */
  /* width: 100%; */
  position: relative;
}

.header {
  height: 60px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
}

.content {
  /* height: calc(100% - 60px); */
  display: flex;
  flex-flow: column nowrap;
}
</style>
