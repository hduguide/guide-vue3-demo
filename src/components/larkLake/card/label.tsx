import { defineComponent } from 'vue'
import styles from './styles/label.module.css'

const status = [
  'background: rgb(255, 232, 230); color: rgb(130, 0, 20); opacity: 1;',
  'background: rgb(255, 248, 189); color: rgb(97, 71, 0); opacity: 1;',
  'background: rgb(228, 247, 210); color: rgb(19, 82, 0); opacity: 1;',
  'background: rgb(233, 233, 233); color: rgb(89, 89, 89); opacity: 1;',
  'background: rgb(212, 238, 252); color: rgb(0, 58, 140); opacity: 1;',
  'background: rgb(222, 232, 252); color: rgb(6, 17, 120); opacity: 1;'
]

export default defineComponent({
  name: 'LabelCard',

  props: ['meta'],

  setup({ meta }) {
    // console.log(meta)
    const { colorIndex } = meta
    const style = status[colorIndex ?? 0]

    return () => (
      <div class={styles.label} style={style}>
        <span class="px-0.5">{meta.label}</span>
      </div>
    )
  }
})
