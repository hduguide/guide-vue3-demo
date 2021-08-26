<template>
  <div class="row">
    <div class="sidebar">
      <DocTree @nodeClick="onNodeClick" />
    </div>
    <article class="article">
      <DocView :item="doc.data" :slug="currSlug" />
    </article>
  </div>
</template>

<script>
import DocTree from '@/components/document/DocTree.vue'
import DocView from '@/components/document/DocView.vue'
import { getDocumentBySlug } from '@/utils'

export default {
  components: {
    DocTree,
    DocView
  },
  methods: {
    onNodeClick(data) {
      if (data.doc_id) {
        this.$router.push(`/articles/${data.slug}`)
      }
    }
  },
  data() {
    return {
      doc: {
        data: {}
      }
    }
  },
  async mounted() {
    const { slug } = this.$route.params
    const data = await getDocumentBySlug(slug || 'readme')
    this.doc = data
    if (!slug) {
      this.$router.push('/articles/readme')
    }
  },
  async beforeRouteUpdate(to, from, next) {
    const { slug } = to.params
    const data = await getDocumentBySlug(slug)
    this.$data.doc = data
    next()
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
