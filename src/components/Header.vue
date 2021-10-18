<template>
  <div class="header">
    <div><img src="../../public/favicon.png" style="width: 55px" /></div>
    <div class="logo">杭电指北</div>
    <div class="space"></div>
    <div class="menu">
      <el-menu mode="horizontal" :default-active="currentIndex" @select="handleNav">
        <el-menu-item
          v-for="(nav, index) in navList"
          :index="index.toString()"
          :key="index"
        >
          {{ nav.name }}
        </el-menu-item>
        <el-menu-item class="gotogithub">
          <a
            href="https://github.com/hduguide/guide-vue3-demo"
            rel="noopener noreferrer"
            target="_blank"
            style="text-decoration: none"
            >Github</a
          >
          <i class="el-icon-s-promotion"></i>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const reactiveData = reactive({
      navList: [
        {
          name: '首页',
          path: '/'
        },
        {
          name: '文章',
          url: '/articles/readme',
          path: '/articles/:slug'
        },
        {
          name: '更新日志',
          path: '/changelog'
        },
        {
          name: '关于',
          path: '/about'
        }
      ],
      currentIndex: '0',

      handleNav(index: any) {
        const menu = reactiveData.navList[index]
        router.push(menu.url ?? menu.path)
      }
    })

    const goGitHub = () => {
      window.open('https://github.com/hduguide/guide-vue3-demo')
    }

    const changeNavActive = (currentPath: string) => {
      reactiveData.currentIndex = reactiveData.navList
        .findIndex((v) => v.path === currentPath)
        .toString()
    }

    watch(
      () => router.currentRoute.value,
      (_n) => {
        changeNavActive(_n.matched[0].path)
      }
    )

    onMounted(() => {
      router.isReady().then(() => {
        changeNavActive(router.currentRoute.value.path)
      })
    })

    return {
      ...toRefs(reactiveData),
      goGitHub
    }
  }
}
</script>

<style>
.header {
  padding: 0 8px;
  border-bottom: solid 1px #e6e6e6;
  background: white;
  display: flex;
  flex-flow: row wrap-reverse;
}

.logo {
  color: #2c3e50;
  font-size: 1.7rem;
  padding-left: 6px;
  font-weight: 600;
}

.space {
  flex: 1 1 auto;
}

.el-menu.el-menu--horizontal {
  border-bottom: none;
}

.menu {
  display: flex;
}

@media screen and (max-width: 768px) {
  .logo {
    display: none;
  }
  .gotogithub {
    display: none;
  }
}

@media screen and (max-width: 475px) {
  .space {
    width: 40px;
  }

  .el-menu-item {
    padding: 0 6px;
  }
}
</style>
