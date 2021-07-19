<template>
  <div class="catalog">
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

<style>
.catalog {
  color: #232323;
  margin: 12px;
  border: 6px;
  height: 100%;
  overflow-y: auto;
}
.el-col-5 {
  height: 605px;
  overflow: hidden;
}
.el-tree {
  display: inline-block;
  min-width: 100%;
  overflow-x: hidden;
}
.el-tree-node__label {
  font-size: 16px;
  font-weight: 550;
}
.el-tree-node__content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 36px;
  cursor: pointer;
}
</style>
