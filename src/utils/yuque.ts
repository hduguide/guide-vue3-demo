/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */

import { IDocSeri, ITocSeri, ITree } from '@/common/types'
import axios from './axios'

export function transformTocTree(toc: ITocSeri[]): ITree[] {
  function buildTree(item: ITocSeri): ITree {
    const tree: ITree = {
      slug: item.slug,
      label: item.title,
      data: item,
      children: []
    }
    toc
      .filter((v) => v.parent_uuid === item.uuid)
      .forEach((v) => {
        tree.children?.push(buildTree(v))
      })
    return tree
  }

  const tree: ITree = { slug: '', label: 'root', children: [] }
  toc
    .filter((v) => v.parent_uuid === '')
    .forEach((v) => {
      tree.children?.push(buildTree(v))
    })
  return tree.children!
}

export async function getDocumentTocTree(): Promise<ITree[]> {
  const { data } = await axios.get('/repos/hduer/guide/toc')
  const tree = transformTocTree(data.data)
  return tree
}

export async function getDocumentBySlug(slug: string): Promise<{ data: IDocSeri }> {
  const { data } = await axios.get(`/repos/hduer/guide/docs/${slug}`)
  return data
}
