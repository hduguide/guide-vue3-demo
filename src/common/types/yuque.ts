/* eslint-disable camelcase */

interface ISerializable {
  _serializer: string
}

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

export interface IUserSeri {
  id: number
  type: string
  login: string
  name: string
  description: string
  avatar_url: string
  followers_count: number
  following_count: number
  created_at: string
  updated_at: string
}

export interface IDocSeri extends ISerializable {
  id: number
  slug: string
  title: string
  description: string
  user_id: number
  book_id: number
  creator: IUserSeri
  format: string
  body: string
  body_draft: string
  body_draft_lake: string
  body_html: string
  body_lake: string
  public: number
  status: number
  view_status: number
  read_status: number
  likes_count: number
  comments_count: number
  content_updated_at: string
  created_at: string
  updated_at: string
  published_at: string
  first_published_at: string
  draft_version: number
  hits: number
  last_editor_id: number
  word_count: number
  cover: string
  custom_description: string
  last_editor: IUserSeri
  book: null
}
