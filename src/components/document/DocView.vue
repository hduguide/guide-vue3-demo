<template>
  <el-container class="articles">
    <!-- <el-header> -->
    <h1 class="articles_title">
      {{ title }}
    </h1>
    <!-- </el-header> -->
    <div v-html="body_html"></div>
  </el-container>
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

<style>
.articles {
  margin-left: 52px;
  margin-right: 52px;
  margin-top: 25px;
  margin-bottom: 25px;
  border: 0px;
  padding: 0px;
  flex-direction: column;
  color: #262626;
  font-size: 18px;
  font-family: 'Chinese Quote', 'Segoe UI', Roboto, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  line-height: 1.74;
  letter-spacing: 0.05em;
}
.articles_title {
  margin: 0px;
  font-size: 35px;
  text-align: center;
}
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  /* z-index:300; */
}
::-webkit-scrollbar-track {
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.06);
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.08);
  /* z-index:300; */
}
::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: inset 0 0 10px rgba(11, 83, 240, 0.548);
  /* z-index:300; */
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
