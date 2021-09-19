import { parser, Node } from 'posthtml-parser'
import { defineComponent } from 'vue'
import LakeNode from './lake'
import styles from './index.module.css'

import './styles/global.styl'
import './styles/hljs-ln.css'

export default defineComponent({
  name: 'LakeView',

  props: ['body'],

  components: {
    LakeNode
  },

  render() {
    return (
      <div class={styles.lakeView}>
        {this.root.map((node) => {
          return <LakeNode node={node}></LakeNode>
        })}
      </div>
    )
  },

  data() {
    return {
      html: this.body || '<h1>loading...</h1>',
      root: [] as Node[]
    }
  },

  created() {
    this.updateRoot(this.html)
  },

  methods: {
    updateRoot(html: string) {
      this.root = parser(html)
      return this.root
    }
  },

  watch: {
    body(nb) {
      this.html = nb
      this.updateRoot(nb)
    }
  }
})
