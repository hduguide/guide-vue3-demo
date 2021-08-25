<template>
  <div class="doc-lake-view">
    <h1 class="lake-title">
      {{ title }}
    </h1>
    <div v-html="body_html"></div>
  </div>
</template>

<script>
import axios from '@/utils/axios'

export default {
  name: 'DocView',
  props: ['slug'],
  data() {
    return {
      title: '',
      body_html: '<h1>loading...</h1>'
    }
  },
  async mounted() {
    const { data } = await axios.get(`/repos/hduer/guide/docs/${this.slug}`)
    this.title = data.data.title
    this.body_html = data.data.body_html
  },
  watch: {
    async slug(n) {
      const { data } = await axios.get(`/repos/hduer/guide/docs/${n}`)
      this.title = data.data.title
      this.body_html = data.data.body_html
    }
  }
}
</script>

<style lang="styl">
img {
  overflow-x: scroll;
  max-width: 100%;
}

.doc-lake-view {
  display: flex;
  flex-flow: column nowrap;
  max-width: 760px;
  padding: 8px;
  margin-bottom: 32px;
  overflow: auto;
  line-height: 1.74;
  letter-spacing: 0.05em;
  font-family: 'Chinese Quote', 'Segoe UI', Roboto, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.lake-title {
  margin: 0px;
  font-size: 36px;
  padding: 6px 2px;
  margin-bottom: 16px;
}

h1 {
  font-size: 2.2rem;
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 600;
  line-height: 1.25;
}
</style>
