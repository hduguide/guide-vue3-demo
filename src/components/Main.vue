<template>
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
  />
  <div class="main-container" style="overflow-y: hidden">
    <el-container>
      <el-header>
        <el-container>
          <Nav />
        </el-container>
      </el-header>
      <el-main style="overflow-y: hidden">
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Nav from '@/components/Nav.vue'

export default defineComponent({
  name: 'Main',
  components: {
    Nav
  }
})
</script>

<style scoped lang="stylus">
// @import '../style/basic.styl';
$top-height = 60px;
$left-side-width = 80px;

.el-header, .el-footer {
  // background-color: #B3C0D1;
  // color: #333;
  // text-align: center;
  height:100%;
}

.el-aside {
  // background-color: #D3DCE6;
  // color: #333;
  // text-align: center;
  width: 100px;
  max-width: 500px;
}

.el-main {
  // background-color: #E9EEF3;
  border:0px;
  padding: 0px;
  // color: #333;
}

.main-container {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: $second-background-color;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.page-links {
  a {
    font-weight: bold;
    margin: 0 20px;
  }
}
</style>
