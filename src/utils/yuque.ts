/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */

import { IDocSeri, ITocSeri, ITree } from '@/common/types'
import axios from './axios'

const config = {
  id: 20249958,
  doclet_id: 21411351,
  type: 'Book',
  slug: 'guide',
  name: '杭电指北',
  user_id: 21951583,
  description: '做不一样的☞南，正在完善中，欢迎加入~'
}

export function transformTocTree(toc: ITocSeri[]): ITree[] {
  function buildTree(item: ITocSeri): ITree {
    const tree: ITree = {
      slug: item.url,
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
  const { data } = await axios.get(`/catalog_nodes?book_id=${config.id}`)
  const tree = transformTocTree(data.data)
  return tree
}

export async function getDocumentBySlug(slug: string): Promise<{ data: IDocSeri }> {
  const { data } = await axios.get(`/docs/${slug}`, {
    params: {
      book_id: config.id,
      include_contributors: true,
      include_hits: true,
      include_like: true,
      include_pager: true,
      include_suggests: true,
      merge_dynamic_data: false
    }
  })
  return data
}

export async function getDocletById(id: number): Promise<{ data: IDocSeri }> {
  const { data } = await axios.get(`/doclets/${id}`)
  return data
}
