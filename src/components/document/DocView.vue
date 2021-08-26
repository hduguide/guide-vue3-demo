<template>
  <div class="doc-container">
    <div class="doc-lake-view">
      <h1 class="lake-title">
        {{ title }}
      </h1>
      <div v-html="html"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ['item'],
  data() {
    return {
      data: {} as any
    }
  },
  watch: {
    item(n) {
      this.$data.data = n
    }
  },
  computed: {
    title() {
      return this.data.title || ''
    },
    html() {
      return this.data.body_html || '<h1> Loading ... </h1>'
    }
  }
}
</script>

<style lang="stylus">
img {
  overflow-x: scroll;
  max-width: 100%;
}

.doc-container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}

.doc-lake-view {
  display: flex;
  flex-flow: column nowrap;
  width: 760px;
  padding: 8px;
  margin-bottom: 32px;
  overflow: auto;
  line-height: 1.74;
  letter-spacing: 0.05em;
  font-family: 'Chinese Quote', 'Segoe UI', Roboto, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
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

h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  line-height: 1.25;
}
</style>
