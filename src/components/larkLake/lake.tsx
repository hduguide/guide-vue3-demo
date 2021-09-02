import { defineComponent, h, resolveComponent } from 'vue'
import { Node, NodeTag } from 'posthtml-parser'
import LakeCard from './card'
import { LakeOliNode, LakeUliNode } from './card/list'
import { parseAttributes, toAttributes } from './utils'

const registeredRenders: Record<string, any> = {
  card: LakeCard,
  ul: LakeUliNode,
  ol: LakeOliNode
}

enum Filter {
  text,
  skip,
  node
}
const filterSkipNodes = ['<!doctype lake>']
const filterSkipTags = ['meta', '']
const skipRender = ''

export default defineComponent({
  name: 'LakeNode',
  props: ['node'],
  render() {
    const node = this.$data.nd as Node
    const nodeFilter = () => {
      if (!node) return Filter.skip
      if (typeof node == 'string') {
        if (filterSkipNodes.includes(node)) {
          return Filter.skip
        }
        return Filter.text
      }
      return Filter.node
    }
    switch (nodeFilter()) {
      case Filter.skip:
        return skipRender
      case Filter.text:
        return node
    }

    const nt = node as NodeTag
    const htmlTag = (nt.tag as string) || ''

    const tagFilter = () => {
      if (filterSkipTags.includes(htmlTag)) {
        return Filter.skip
      }
      return Filter.node
    }
    if (tagFilter() == Filter.skip) {
      return skipRender
    }

    const LakeNode = resolveComponent('LakeNode')
    const renderChildren = () => {
      const children: Node[] = (nt.content as Node[]) ?? []
      return children.map((child) => h(LakeNode, { node: child }))
    }

    const customRender = registeredRenders[htmlTag]
    if (customRender) {
      return h(customRender, { ...nt.attrs, node })
    }

    const attrs = parseAttributes(nt.attrs ?? {})
    if (nt.tag == 'span') {
      const fontSize = attrs.class.find((v) => v.startsWith('lake-fontsize-'))
      if (fontSize) {
        attrs.style['font-size'] = `${fontSize.split('-')[2]}px`
      }
    }

    return h(htmlTag, toAttributes(attrs), { default: () => renderChildren() })
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
