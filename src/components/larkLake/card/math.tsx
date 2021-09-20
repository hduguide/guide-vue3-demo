import { defineComponent } from 'vue'
import { LakeIcon } from './components'

// {
//   "code": "E=mc^2",
//   "src": "https://cdn.nlark.com/yuque/__latex/826676a6a5ad24552f0d5af1593434cc.svg",
//   "id": "j5tJm"
// }

export default defineComponent({
  name: 'MathCard',

  props: ['meta'],

  setup({ meta }) {
    // console.log('meta => ', meta)

    return () => (
      <div class="inline-block" style={{ verticalAlign: 'middle' }}>
        <img
          src={meta.src}
          style={{ verticalAlign: 'middle', borderStyle: 'none' }}
        ></img>
      </div>
    )
  }
})
