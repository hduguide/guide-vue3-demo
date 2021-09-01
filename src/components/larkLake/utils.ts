import { Attributes, NodeTag } from 'posthtml-parser'
import { h } from 'vue'
import LakeNode from './lake'

/**
 *
 * @param styleAttr
 * @returns
 */
export function parseStyles(styleAttr: string): Record<string, string> {
  const styles: Record<string, string> = {}
  if (styleAttr) {
    styleAttr.split(';').forEach((style) => {
      const item = style.split(':')
      styles[item[0]] = item[1]
    })
  }
  return styles
}

/**
 *
 * @param classAttr
 * @returns
 */
export function parseClass(classAttr: string): Array<string> {
  const classes: Array<string> = []
  if (classAttr) {
    classAttr.split(' ').forEach((classItem) => {
      classes.push(classItem)
    })
  }
  return classes
}

export declare type ElemAttrs = {
  style: Record<string, string>
  class: Array<string>
  [k: string]: string | number | boolean | any
}

export function parseAttributes(nodeAttr: Attributes): ElemAttrs {
  const attr = { ...nodeAttr }
  const attrs: ElemAttrs = {
    style: parseStyles(attr.style as string),
    class: parseClass(attr.class as string)
  }
  return Object.assign(attr, attrs)
}

export function toAttributes(attrs: ElemAttrs): Attributes {
  const attr: Attributes = { ...attrs }
  if (attrs.class) {
    attr.class = attrs.class.join(' ')
  }
  if (attrs.style) {
    const styles = attrs.style
    attr.style = Object.keys(styles)
      .map((style) => `${style}:${styles[style]}`)
      .join(';')
  }
  return attr
}

export function renderChildren(node: NodeTag) {
  const render = () => {
    const children: Node[] = node.content as []
    return children.map((child) => h(LakeNode, { node: child }))
  }

  return {
    default: render
  }
}
