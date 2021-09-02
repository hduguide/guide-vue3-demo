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

/**
 * superbytes format bytes unit to human readable
 * @param bytes
 * @param arg1
 * @param arg2
 * @returns
 */
export function superbytes(byte: number, arg1?: any, arg2?: any) {
  const UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const bytes = Math.abs(byte)
  let divider: number = 1024
  let digits = 0

  if (arg1 === undefined && arg2 === undefined) {
    divider = 1024
    digits = 2
  }
  if (typeof arg1 === 'boolean') {
    if (arg1) {
      divider = 1000
    } else {
      divider = 1024
    }
    if (typeof arg2 === 'number') {
      digits = arg2
    } else {
      digits = 2
    }
  } else if (typeof arg1 === 'number') {
    digits = arg1
    if (typeof arg2 === 'boolean') {
      if (arg2) {
        divider = 1000
      } else {
        divider = 1024
      }
    } else {
      divider = 1024
    }
  }

  if (Number.isFinite(bytes)) {
    if (bytes < divider) {
      const num = bytes
      return `${num} ${UNITS[0]}`
    }

    for (let i = 1; i <= 8; ) {
      if (bytes >= divider ** i && bytes < divider ** (i + 1)) {
        const num = (bytes / divider ** i).toFixed(digits)
        return `${num} ${UNITS[i]}`
      }
      i += 1
    }
  }
  return null
}
