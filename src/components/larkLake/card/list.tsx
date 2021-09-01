import { defineComponent, h } from 'vue'
import { renderChildren } from '../utils'
import { NodeTag, Attributes } from 'posthtml-parser'

const liSymbols = ['●', '○', '■']
const olTypes = ['1', 'a', 'i']

const LakeUliNode = defineComponent({
  props: ['node'],
  setup(props, { attrs }) {
    const node = props.node as NodeTag
    const children = node.content as NodeTag[]
    const indent = (attrs['data-lake-indent'] as string) ?? '0'
    return () => (
      <ul {...node.attrs}>
        {children.map((child) => (
          <LakeLiNode {...child.attrs} indent={indent}>
            {renderChildren(child)}
          </LakeLiNode>
        ))}
      </ul>
    )
  }
})

const LakeOliNode = defineComponent({
  props: ['node'],
  setup(props, { attrs }) {
    const node = props.node as NodeTag
    const indent = (attrs['data-lake-indent'] as string) ?? '0'
    const type: any = olTypes[+indent % olTypes.length] ?? '1'
    return () => (
      <ol type={type} {...node.attrs}>
        {() => renderChildren(node)}
      </ol>
    )
  }
})

const LakeLiNode = defineComponent({
  props: ['indent'],
  setup(props, { slots }) {
    const { indent } = props
    const symbol = liSymbols[+indent % liSymbols.length]
    return () => (
      <li>
        <span>{symbol} </span>
        <span>{() => slots.default!()}</span>
      </li>
    )
  }
})

export { LakeUliNode, LakeOliNode }
