<template>
  <div class="row">
    <div class="sidebar">
      <DocTree @nodeClick="onNodeClick" />
    </div>
    <article class="article">
      <DocView :slug="currSlug" />
    </article>
  </div>
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

<style lang="css" scoped>
.row {
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  width: 100%;
}

.sidebar {
  position: fixed;
  top: 60px;
  left: 0;
  width: 300px;
  height: calc(100% - 60px);
  flex: none;
  background: #fafafa;
}

.article {
  padding-left: 300px;
  flex: 1 1 auto;
  height: 100%;
}

/* Tree 滚动条样式 */
.sidebar ::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.sidebar ::-webkit-scrollbar-track {
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.05);
}

.sidebar ::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.25);
}
</style>
