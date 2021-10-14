<template>
  <div class="catalog">
    <el-tree
      empty-text="Loading..."
      :data="tree"
      node-key="slug"
      :props="defaultProps"
      :default-expanded-keys="defaultExpanded"
      @node-click="handleNodeClick"
    >
      <template v-slot="{ node, data }">
        <span :style="getStyle(data)"> {{ getLabel(node) }}</span>
      </template>
    </el-tree>
  </div>
</template>

<script lang="ts">
import { getDocumentTocTree } from '@/utils'
import { ITree } from '@/common/types'

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
    const tree = await getDocumentTocTree()
    this.$data.tree = tree
  },
  computed: {
    defaultExpanded() {
      const { slug } = this.$route.params
      return slug ? [slug] : null
    }
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

<style lang="css">
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
