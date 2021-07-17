<template>
  <el-row justify="start">
    <el-col :span="5">
      <DocTree @nodeClick="onNodeClick" />
    </el-col>
    <el-col :span="19">
      <DocView :slug="currSlug" />
      <el-footer class="footer"> 加入我们一起完善指北吧！ </el-footer>
    </el-col>
  </el-row>
</template>

<script>
// import DocTile from '@/components/document/DocTile.vue'
import DocTree from '@/components/document/DocTree.vue'
import DocView from '@/components/document/DocView.vue'

export default {
  components: { DocTree, DocView },
  name: 'Articles',
  setup() {},
  methods: {
    onNodeClick(data) {
      this.currSlug = data.slug
    }
  },
  data() {
    return {
      currSlug: 'readme'
    }
  }
}
</script>

<style>
.footer {
  font-size: 12px;
  font-weight: bold;
  font-style: italic;
  color: #232323;
}
.catalog {
  font-size: 40px;
  color: #232323;
  margin: 0px;
  border: 0px;
  height: 100%;
  overflow-y: scroll;
}
</style>
