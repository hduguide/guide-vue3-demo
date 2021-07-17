<template>
  <el-container>
    <el-header>
      <h1>
        {{ title }}
      </h1>
    </el-header>
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

<style></style>
