import { defineComponent, h } from 'vue'
import { Node, NodeTag } from 'posthtml-parser'
import LakeCard from './card'

const reservedTags = ['meta', '']

export default defineComponent({
  name: 'LakeNode',
  props: ['node'],
  render() {
    const node = this.$data.nd as Node
    if (!node) return ''
    if (typeof node == 'string') {
      if (node == '<!doctype lake>') return ''
      return node
    }
    const nt = node as NodeTag
    const tag = (nt.tag as string) || ''
    if (reservedTags.includes(tag)) {
      return ''
    }
    if (nt.tag == 'card') {
      // console.log('CARD => ', nt)
      return h(LakeCard, nt.attrs)
    }
    const children: Node[] = (nt.content as Node[]) ?? []
    return h(
      nt.tag as string,
      nt.attrs,
      children.map((child) => {
        return <lake-node node={child}></lake-node>
      })
    )
  },
  created() {},
  data() {
    return {
      nd: this.node as Node
    }
  },
  watch: {
    node(nd) {
      this.nd = nd
    }
  }
})
