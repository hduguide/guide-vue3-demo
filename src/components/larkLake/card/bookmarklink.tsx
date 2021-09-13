import { defineComponent } from 'vue'

/**
 * {
  "src": "https://www.baidu.com",
  "text": "链接",
  "detail": {
    "icon": "https://www.baidu.com/favicon.ico",
    "image": "https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/topnav/baiduyun@2x-e0be79e69e.png",
    "title": "百度一下，你就知道",
    "belong": null,
    "belong_url": null,
    "desc": "全球领先的中文搜索引擎、致力于让网民更便捷地获取信息，找到所求。百度超过千亿的中文网页数据库，可以瞬间找到相关的搜索结果。",
    "url": "https://www.baidu.com",
    "_serializer": "web.editor_link_detail"
  },
  "id": "Ve8FP"
}
 */

export default defineComponent({
  name: 'BookmarkLinkCard',

  props: ['meta'],

  setup({ meta }) {
    const { detail } = meta
    console.log(meta)

    return () => (
      <a
        style={{ textDecoration: 'none', color: 'unset' }}
        class="py-2"
        target="_blank"
        href={meta.src}
      >
        <div
          style={{ border: '1px solid #d8d8d8' }}
          class="w-full border space-y-2 p-2 flex flex-row items-center flex-1 flex-nowrap"
        >
          <div class="w-0 px-4 flex flex-1 flex-col space-y-1">
            <div class="">
              <p>{detail.title}</p>
            </div>
            <div class="w-full overflow-ellipsis overflow-hidden whitespace-nowrap">
              {detail.desc}
            </div>
            <div class="flex flex-row flex-nowrap space-x-2">
              <img class="h-4 self-center" src={detail.icon} alt="" />
              <span>{detail.url}</span>
            </div>
          </div>
          <div class="flex-0">
            <img src={detail.image} alt="" />
          </div>
        </div>
      </a>
    )
  }
})
