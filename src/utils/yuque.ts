/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */

export interface ITocSeri {
  type: string
  title: string
  uuid: string
  url: string
  prev_uuid: string
  sibling_uuid: string
  child_uuid: string
  parent_uuid: string
  doc_id: number
  level: number
  id: number
  open_window: number
  visible: number
  depth: number
  slug: string
}

export interface ITree {
  label: string
  data?: ITocSeri
  children?: ITree[]
}

export function transformTocTree(toc: ITocSeri[]): ITree[] {
  function buildTree(item: ITocSeri): ITree {
    const tree = { label: item.title, data: item, children: [] } as ITree
    toc
      .filter((v) => v.parent_uuid === item.uuid)
      .forEach((v) => {
        tree.children?.push(buildTree(v))
      })
    return tree
  }

  const tree = { label: 'root', children: [] } as ITree
  toc
    .filter((v) => v.parent_uuid === '')
    .forEach((v) => {
      tree.children?.push(buildTree(v))
    })
  return tree.children!
}
