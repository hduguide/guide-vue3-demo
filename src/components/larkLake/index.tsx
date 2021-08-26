import { parser, Node } from 'posthtml-parser'
import { defineComponent } from 'vue'

import LakeNode from './lake'

export default defineComponent({
  name: 'LakeView',

  props: ['body'],

  components: {
    LakeNode
  },

  render() {
    return (
      <div class="doc-container">
        <div class="doc-lake-view">
          <h1 class="lake-title"> </h1>
          <div>
            {this.root.map((node) => {
              return <LakeNode node={node}></LakeNode>
            })}
          </div>
        </div>
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
    const ast = parser(this.html)
    this.root = ast
    console.log('ast => ', ast)
  },

  watch: {
    body(nb) {
      this.html = nb
      const ast = parser(this.html)
      this.root = ast
      console.log('ast => ', ast)
    }
  }
})
