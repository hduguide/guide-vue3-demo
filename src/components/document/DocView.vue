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
  padding: 0px;
  border: 0px;
  margin: 0px;
  height: 620px;
  overflow-y: scroll;
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
/* 滚动槽 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.06);
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.08);
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>
