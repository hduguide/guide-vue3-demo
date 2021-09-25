<template>
  <div class="flex flex-row justify-center">
    <LakeView :body="body" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LakeView from '@/components/larkLake'
import { getDocletById } from '@/utils'

export default defineComponent({
  components: {
    LakeView
  },
  name: 'Home',
  data() {
    return {
      body: '<h1> Loading ... </h1>'
    }
  },
  async mounted() {
    const { data } = await getDocletById(21411351)
    this.$data.body = data.body_asl
  }
})
</script>
