<template>
  <el-row justify="start">
    <DocTree @nodeClick="onNodeClick" />
    <DocView :slug="currSlug" />
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

<style></style>
