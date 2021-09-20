import { defineComponent } from 'vue'
import { LakeIcon } from './components'

// {
//   "mode": "card/embed",
//   "heightMode": "default/custom",
//   "height": 560.8125, // valid when heightMode is `custom`
//   "src": "https://www.yuque.com/yuque/ng1qth/about",
//   "url": "https://www.yuque.com/yuque/ng1qth/about?view=doc_embed",
//   "detail": {
//     "image": "https://cdn.nlark.com/yuque/0/2019/png/215718/1558090039430-20aaa17b-443a-4f32-9251-79ddf7f5f437.png",
//     "title": "语雀是什么",
//     "type": "doc",
//     "belong": "语雀基础概念",
//     "belong_url": "/yuque/ng1qth",
//     "desc": "「语雀」是一个「专业的云端知识库」，孵化自 蚂蚁金服 ，是 体验科技 理念下的一款创新产品，已是 10 万阿里员工进行文档编写、知识沉淀的标配。",
//     "url": "https://www.yuque.com/yuque/ng1qth/about",
//     "target_type": "Doc",
//     "_serializer": "web.editor_link_detail"
//   },
//   "id": "ZhbZr",
//   "margin": {
//     "top": true,
//     "bottom": true
//   }
// }

export default defineComponent({
  name: 'YuqueCard',

  props: ['meta'],

  setup({ meta }) {
    console.log('meta => ', meta)
    const { detail } = meta

    const height = meta.heightMode == 'custom' ? meta.height : 400

    if (meta.mode == 'embed') {
      return () => (
        <div class="border">
          <iframe
            class="w-full"
            src={meta.url}
            frameborder="1"
            style={{ height: `${height}px` }}
          ></iframe>
        </div>
      )
    }

    return () => (
      <a
        style={{ textDecoration: 'none', color: 'unset' }}
        class="py-2"
        target="_blank"
        href={meta.src}
      >
        <div
          style={{ border: '1px solid #d8d8d8' }}
          class="w-full border p-4 flex flex-row flex-1 flex-nowrap"
        >
          <div class="flex-0">
            <LakeIcon icon="doc"></LakeIcon>
          </div>
          <div class="w-0 px-2 flex flex-1 flex-col space-y-1">
            <div class="px-2">
              <strong>{detail.title}</strong>
            </div>
            <div class="w-full overflow-ellipsis overflow-hidden whitespace-nowrap">
              {detail.desc}
            </div>
            <div class="flex flex-row flex-nowrap space-x-2">
              <img class="h-4 self-center" src={detail.icon} alt="" />
              <span>{detail.belong}</span>
            </div>
          </div>
        </div>
      </a>
    )
  }
})
