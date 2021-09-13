import { defineComponent, h } from 'vue'
import ImageCard from './image'
import FileCard from './file'
import LabelCard from './label'
import BookmarkLinkCard from './bookmarklink'

import styles from './styles/index.module.css'

const registeredLakeCard: Record<string, any> = {
  image: ImageCard,
  file: FileCard,
  label: LabelCard,
  bookmarklink: BookmarkLinkCard
}

export default defineComponent({
  name: 'LakeCard',

  props: ['type', 'name', 'value'],

  render() {
    const meta = this.meta
    const CardNode = registeredLakeCard[this.name]
    if (CardNode) {
      return h(CardNode, { meta })
    }
    return (
      <div class={styles.nosupport}>
        <div>
          不支持的卡片:
          <span>
            Type: {this.type}, name: {this.name}
          </span>
        </div>
        <json-viewer value={meta} copyable boxed sort />
      </div>
    )
  },

  created() {
    let value = decodeURIComponent(this.value ?? '{}')
    if (value.startsWith('data:')) {
      value = value.substring(5)
    }
    const data = JSON.parse(value)
    // console.log('card => ', data)
    this.meta = data['data'] ?? data
  },

  data() {
    return {
      meta: {} as any
    }
  }
})
