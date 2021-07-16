import { defineComponent, DefineComponent, onMounted } from 'vue';
<template>
  <div>Test Page</div>
  <div v-html="message"></div>
  <button @click="getMessage">Test</button>
</template>

<script>
import { defineComponent } from 'vue'
import axios from '../utils/axios'

export default defineComponent({
  name: 'TestPage',
  setup() {},
  methods: {
    getMessage() {
      axios.get('/repos/hduer/guide/docs/choose-networks').then((val) => {
        this.$data.message = val.data.data.body_html
        console.log(val.data.data)
      })
    }
  },
  data() {
    return {
      data: [
        {
          id: 1,
          title: 'test title'
        }
      ],
      message: 'Hello, Jack'
    }
  }
})
</script>

<style>
.test-page {
  background-color: antiquewhite;
}
</style>
