import { defineComponent } from 'vue'

import styles from './styles/file.module.css'
import { superbytes } from '../utils'

export default defineComponent({
  name: 'FileCard',

  props: ['meta'],

  setup({ meta }) {
    // console.log('meta => ', meta)

    return () => (
      <div style={{ margin: meta.margin }}>
        <a href={meta.src}>
          <span>{meta.name} </span>
          <span> {superbytes(meta.size)}</span>
        </a>
      </div>
    )
  }
})
