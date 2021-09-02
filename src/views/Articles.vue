<template>
  <div class="row">
    <div class="sidebar">
      <DocTree @nodeClick="onNodeClick" />
    </div>
    <article class="article">
      <div class="container">
        <div>
          <h1>{{ meta.title }}</h1>
        </div>
        <LakeView :body="lakeHtml" />
      </div>
    </article>
    <el-backtop></el-backtop>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DocTree from '@/components/document/DocTree.vue'
import LakeView from '@/components/larkLake/index'
import { getDocumentBySlug } from '@/utils'
import { IDocSeri, ITocSeri } from '@/common/types'

export default defineComponent({
  components: {
    DocTree,
    LakeView
  },
  async mounted() {
    const { slug } = this.$route.params as { slug: string }
    const data = await getDocumentBySlug(slug || 'readme')
    this.document = data
    if (!slug) {
      this.$router.push('/articles/readme')
    }
    this.setTitle(data.data.title)
  },
  data() {
    return {
      document: {
        data: {} as IDocSeri
      }
    }
  },
  methods: {
    onNodeClick(data: ITocSeri) {
      if (data.doc_id) {
        this.$router.push(`/articles/${data.slug}`)
      }
    },
    setTitle(title: string) {
      document.title = `${title} - 杭电指北`
    }
  },
  computed: {
    meta() {
      const { data } = this.$data.document
      return {
        title: data.title
      }
    },
    lakeHtml() {
      const body = this.document.data.body_lake
      return body || '<h1>loading...</h1>'
    }
  },
  async beforeRouteUpdate(to, from, next) {
    const { slug } = to.params as { slug: string }
    const data = await getDocumentBySlug(slug)
    this.document = data
    this.setTitle(data.data.title)
    next()
  }
})
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
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}

.container {
  display: flex;
  flex-flow: column nowrap;
  flex: 0 1 0%;
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
