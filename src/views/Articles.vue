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

<style>
.row {
  /* position: relative; */
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  width: 100%;
}

.sidebar {
  position: fixed;
  top: 60px;
  left: 0;
  width: 250px;
  height: calc(100% - 60px);
  flex: none;
  background: #fafafa;
}

.article {
  padding-left: 300px;
  flex: 1 1 auto;
  height: 100%;
}

.footer {
  font-size: 12px;
  font-weight: bold;
  font-style: italic;
  color: #232323;
}
</style>
