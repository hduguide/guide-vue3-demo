<template>
  <el-menu mode="horizontal" :default-active="currentIndex" @select="handleNav">
    <el-menu-item
      v-for="(nav, index) in navList"
      :index="index.toString()"
      :key="index"
      :keyPath="nav.path"
    >
      {{ nav.name }}
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { reactive, toRefs, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { NavItem } from '../common/types'

export default {
  name: 'Nav',
  setup() {
    const router = useRouter()

    const reactiveData = reactive({
      navList: [
        {
          name: 'Home',
          isActive: true,
          path: '/'
        },
        {
          name: 'Articles',
          isActive: false,
          path: '/articles'
        },
        {
          name: 'Vuex',
          isActive: false,
          path: '/vuex'
        },
        {
          name: 'Axios',
          isActive: false,
          path: '/axios'
        },
        {
          name: 'Test',
          isActive: false,
          path: '/test'
        }
      ],
      currentIndex: '0',

      navClick(e: NavItem) {
        router.push(e.path)
      },

      handleNav(key: any) {
        router.push(reactiveData.navList[key])
      }
    })

    const changeNavActive = (currentPath: string) => {
      reactiveData.navList.forEach((v: NavItem) => {
        const temp = v
        temp.isActive = temp.path === currentPath
        return temp
      })
      reactiveData.currentIndex = reactiveData.navList
        .findIndex((v) => v.isActive === true)
        .toString()
      console.log(reactiveData.currentIndex)
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
      ...toRefs(reactiveData)
    }
  }
}
</script>

<style scoped lang="stylus">
// @import '../style/basic.styl';
</style>
