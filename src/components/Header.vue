<template>
  <div class="header">
    <!-- <div class="title" @click="router.push('/')">
      Vite2.x + Vue3.x + TypeScript Starter
    </div> -->
    <div class="go-github" @click="goGitHub">
      <i class="icon el-icon-s-promotion"></i> GitHub
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useMeta } from 'vue-meta'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Header',
  setup() {
    const router = useRouter()

    useMeta({
      title: 'Test title'
    })

    const goGitHub = () => {
      window.open('https://github.com/hduguide/vue3-starter')
    }

    return {
      router,
      goGitHub
    }
  }
})
</script>

<style scoped lang="stylus">
.header {
  //height: 100%;
  background: #fff;
  display: flex;
  justify-content: space-between;
  // align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  font-weight: bold;


  .title {
    font-size: 20px;
    cursor: pointer;
  }

  .go-github {
    cursor: pointer;
    font-size: 16px;

    .icon {
      font-size: 20px;
    }
  }
}
</style>
