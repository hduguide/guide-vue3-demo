<template>
  <div class="catalog">
    <el-tree :data="tree" :props="defaultProps" @node-click="handleNodeClick">
      <template v-slot="{ node, data }">
        <span :style="getStyle(data)"> {{ getLabel(node) }}</span>
      </template>
    </el-tree>
  </div>
</template>

<script lang="ts">
import axios from '../../utils/axios'
import { ITree, transformTocTree } from '../../utils/yuque'

export default {
  emits: ['nodeClick'],
  data() {
    return {
      tree: [] as ITree[],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  async created() {
    const { data } = await axios.get('/repos/hduer/guide/toc')
    const tree = transformTocTree(data.data)
    this.$data.tree = tree
  },
  methods: {
    handleNodeClick(node: any) {
      this.$emit('nodeClick', node.data)
    },
    getLabel(node: any) {
      return node.label
    },
    getStyle(data: any) {
      const level: number = data.data.level || 0
      return {
        'font-size': `${16 - level}px`,
        'font-weight': 550 - data.data.level * 50,
        'padding-top': `${12 - level * 2}px`,
        'padding-bottom': `${12 - level * 2}px`
      }
    }
  }
}
</script>

<style>
.catalog {
  padding: 16px 4px;
  height: 100%;
  overflow: auto;
  background: #fafafa;
}

.el-tree {
  background: unset;
}

.el-tree-node__content {
  height: unset;
}
</style>
