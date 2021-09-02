import { defineComponent, h } from 'vue'
import { renderChildren } from '../utils'
import { NodeTag } from 'posthtml-parser'
import * as roman from 'romans'

const liSymbols = ['●', '○', '■']
const olTypes = ['1', 'a', 'i']
type OrderedType = '1' | 'a' | 'i'

const LakeUliNode = defineComponent({
  props: ['node'],
  setup(props, { attrs }) {
    const node = props.node as NodeTag
    const children = node.content as NodeTag[]
    const indent = (attrs['data-lake-indent'] as string) ?? '0'
    const symbol = liSymbols[+indent % liSymbols.length]
    return () => (
      <ul {...node.attrs}>
        {children.map((child) => (
          <LakeLiNode {...child.attrs} symbol={symbol}>
            {renderChildren(child)}
          </LakeLiNode>
        ))}
      </ul>
    )
  }
})

function genOrderedSymbol(order: number, type: OrderedType) {
  const genAorder = (order: number) => {
    const base = 'zabcdefghijklmnopqrstuvwxyz'
    const len = 26
    let num = order
    let result = []
    while (num > 0) {
      const mod = num % len
      result.push(base[mod])
      num = Math.floor(num / len) - (mod == 0 ? 1 : 0)
    }
    return result.reverse().join('')
  }

  switch (type) {
    case '1':
      return `${order}. `
    case 'a':
      return `${genAorder(order)}. `
    case 'i':
      return `${roman.romanize(order)}. `.toLowerCase()
  }
}

const LakeOliNode = defineComponent({
  props: ['node'],
  setup(props, { attrs }) {
    const node = props.node as NodeTag
    const children = node.content as NodeTag[]
    const indent = (attrs['data-lake-indent'] as string) ?? '0'
    const type = (olTypes[+indent % olTypes.length] ?? '1') as OrderedType
    const start = (attrs['start'] as string) ?? '1'
    return () => (
      <ol type={type} {...node.attrs}>
        {children.map((child, i) => (
          <LakeLiNode symbol={genOrderedSymbol(+start + i, type)} {...child.attrs}>
            {renderChildren(child)}
          </LakeLiNode>
        ))}
      </ol>
    )
  }
})

const LakeLiNode = defineComponent({
  props: ['symbol'],
  setup(props, { slots }) {
    const { symbol } = props
    return () => (
      <li>
        <span>{symbol} </span>
        <span>{() => slots.default!()}</span>
      </li>
    )
  }
})

export { LakeUliNode, LakeOliNode }
