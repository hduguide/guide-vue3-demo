<template>
  <el-row class="header" justify="space-between" align="middle">
    <el-col :span="2">
      <div class="logo">杭电指北</div>
    </el-col>
    <el-col :span="6">
      <el-menu mode="horizontal" :default-active="currentIndex" @select="handleNav">
        <el-menu-item
          v-for="(nav, index) in navList"
          :index="index.toString()"
          :key="index"
          :keyPath="nav.path"
        >
          {{ nav.name }}
        </el-menu-item>
        <div class="go-github" @click="goGitHub">
          <i class="icon el-icon-s-promotion"></i> GitHub
        </div>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { reactive, toRefs, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { NavItem } from '../common/types'
import menus from '../common/configs/menu'

export default {
  name: 'Nav',
  setup() {
    const router = useRouter()
    const reactiveData = reactive({
      navList: menus,
      currentIndex: '0',

      navClick(e: NavItem) {
        router.push(e.path)
      },

      handleNav(key: any) {
        router.push(reactiveData.navList[key])
      }
    })

    const goGitHub = () => {
      window.open('https://github.com/hduguide/vue3-starter')
    }

    const changeNavActive = (currentPath: string) => {
      reactiveData.navList.forEach((v: NavItem) => {
        const temp = v
        temp.isActive = temp.path === currentPath
        return temp
      })
      reactiveData.currentIndex = reactiveData.navList
        .findIndex((v) => v.isActive === true)
        .toString()
    }
    watch(
      () => router.currentRoute.value,
      (_n) => {
        changeNavActive(_n.path)
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
}

.el-menu.el-menu--horizontal {
  border-bottom: none;
}

.logo {
  padding: 8px 16px;
  font-weight: 600;
  font-size: 20px;
}
</style>
