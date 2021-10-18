<template>
  <div class="row">
    <div class="sidebar">
      <DocTree @nodeClick="onNodeClick" />
    </div>
    <article class="article">
      <div class="container">
        <div class="treeMenu">
          <el-button icon="el-icon-menu" size="mini" @click="drawer = true">
            Menu
          </el-button>
        </div>
        <div>
          <h1>{{ meta.title }}</h1>
        </div>
        <LakeView :body="lakeHtml" />
      </div>
    </article>
    <el-drawer
      v-model="drawer"
      title="杭电指北"
      direction="ltr"
      :size="300"
      append-to-body
      lock-scroll
      :with-header="false"
    >
      <DocTree @nodeClick="onNodeClick" />
    </el-drawer>
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
      drawer: false,
      document: {
        data: {} as IDocSeri
      }
    }
  },
  methods: {
    onNodeClick(data: ITocSeri) {
      if (data.doc_id) {
        this.$router.push(`/articles/${data.url}`)
        this.drawer = false
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
      const body = this.document.data.content
      return body || '<h1>loading...</h1>'
    }
  },
  async beforeRouteUpdate(to, from, next) {
    const { slug } = to.params as { slug: string }
    if (slug) {
      const data = await getDocumentBySlug(slug)
      this.document = data
      this.setTitle(data.data.title)
      next()
    }
  }
})
</script>

<style lang="css" scoped>
.row {
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  /* width: 100%; */
  --sidebar-width: 280px;
}

@media screen and (max-width: 768px) {
  .row {
    --sidebar-width: 0px;
  }

  .sidebar {
    display: none;
  }

  .treeMenu {
    display: block !important;
    position: sticky;
    top: 60px;
  }

  /* .doc-lake-view {
    width: 480px!important;
  } */
}

/* @media screen and (min-width: 800px) and (max-width: 1080px){
  .sidebar {
    display: static;
    width: auto;
  }
} */

.treeMenu {
  display: none;
}

.sidebar {
  position: fixed;
  top: 60px;
  left: 0;
  width: var(--sidebar-width);
  height: calc(100% - 60px);
  flex: none;
  background: #fafafa;
}

.article {
  padding-left: var(--sidebar-width);
  flex: 1 1 auto;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}

.container {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  flex: 1 1 auto;
  margin: 0 100px;
}

@media screen and (max-width: 768px) {
  .container {
    margin: 0 60px;
  }
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
