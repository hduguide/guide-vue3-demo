<template>
  <div>
    <el-tree :data="tree" :props="defaultProps" @node-click="handleNodeClick" :span="5">
    </el-tree>
  </div>
</template>

<script>
import axios from '../../utils/axios'
import { transformTocTree } from '../../utils/yuque'

export default {
  name: 'DocTree',
  emits: ['nodeClick'],
  data() {
    return {
      tree: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  async mounted() {
    const { data } = await axios.get('/repos/hduer/guide/toc')
    const tree = transformTocTree(data.data)
    this.$data.tree = tree
  },
  methods: {
    handleNodeClick(node) {
      this.$emit('nodeClick', node.data)
    }
  }
}
</script>

<style></style>
