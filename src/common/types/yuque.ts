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
  slug: string
  label: string
  data?: ITocSeri
  children?: ITree[]
}

export interface IDocSeri {}
