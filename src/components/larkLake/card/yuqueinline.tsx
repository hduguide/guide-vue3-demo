import { defineComponent } from 'vue'

const svgYuqueDoc =
  'https://gw.alipayobjects.com/zos/bmw-prod/11d695b4-30c1-478f-940a-e20095ccb2fe.svg'

// {
//   "mode": "embed",
//   "heightMode": "default",
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
//   "id": "K5v0E",
//   "margin": {
//     "top": true,
//     "bottom": true
//   }
// }
export default defineComponent({
  name: 'YuqueInlineCard',

  props: ['meta'],

  setup({ meta }) {
    console.log('meta => ', meta)
    const { detail } = meta

    return () => (
      <div class="inline-flex items-center">
        <span
          style={{
            backgroundImage: `url(${svgYuqueDoc})`,
            width: '24px',
            height: '24px',
            marginRight: '10px'
          }}
        ></span>
        <a href={detail.url} target="_blank">
          <div>{detail.title}</div>
        </a>
      </div>
    )
  }
})
