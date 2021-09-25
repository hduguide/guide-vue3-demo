<template>
  <div class="flex flex-row justify-center">
    <LakeView :body="body" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LakeView from '@/components/larkLake'
import { getDocumentBySlug } from '@/utils'

export default defineComponent({
  components: {
    LakeView
  },
  data() {
    return {
      body: '<h1> Loading ... </h1>'
    }
  },
  async mounted() {
    const { data } = await getDocumentBySlug('about')
    this.$data.body = data.content
  }
})
</script>
