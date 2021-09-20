import { defineComponent } from 'vue'

import LakeView from '../index'

export default defineComponent({
  name: 'TableCard',

  props: ['meta'],

  setup({ meta }) {
    // console.log('meta => ', meta)

    return () => (
      <div style={''}>
        <LakeView body={meta.html}></LakeView>
      </div>
    )
  }
})
