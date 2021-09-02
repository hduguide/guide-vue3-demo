import { defineComponent } from 'vue'
import { component as Viewer } from 'v-viewer'

export default defineComponent({
  name: 'ImageCard',

  components: {
    Viewer
  },

  props: ['meta'],

  setup({ meta }) {
    // console.log('meta => ', meta)

    return () => (
      <div style={{ margin: meta.margin }}>
        <Viewer>
          <img
            height={meta.height}
            width={meta.width}
            src={meta.src}
            alt={meta.name}
            title={meta.name}
          />
        </Viewer>
      </div>
    )
  }
})
