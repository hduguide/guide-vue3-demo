<template>
  <Main />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Main from '@/components/Main.vue'

/**
 * 引入全局样式
 */
import '@/style/basic.styl'
import '@/style/index.css'

export default defineComponent({
  name: 'App',
  metaInfo: {
    title: '测试标题'
  },
  components: {
    Main
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 600px;
  width: 100%;
}

a {
  color: #409eff;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.div a {
  color: #090;
}
.div a:hover {
  color: #090;
}
</style>
