import { parser, Node } from 'posthtml-parser'
import { defineComponent } from 'vue'
import LakeNode from './lake'
import styles from './index.module.css'
import './style/lake.styl'

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
    const root = this.updateRoot(this.html)
    console.log('rootAst => ', root)
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
      const root = this.updateRoot(nb)
      console.log('rootAst => ', root)
    }
  }
})
