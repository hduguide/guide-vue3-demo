import { defineComponent } from 'vue'
import { superbytes } from '../utils'
import PdfIcon from './assets/icon-pdf.svg'

// {
//   "src": "https://www.yuque.com/attachments/yuque/0/2021/pdf/2596791/1630397029103-5030e370-4a30-4e88-856f-7cc255269893.pdf",
//   "name": "卡片测试文档，看看语燕渲染如何？.pdf",
//   "size": 556099,
//   "type": "application/pdf",
//   "ext": "pdf",
//   "source": "",
//   "status": "done",
//   "collapsed": false,
//   "download": false,
//   "taskType": "upload",
//   "taskId": "ufa1e2c16-6389-488d-95ce-432ee3ff02f",
//   "__spacing": "both",
//   "__height": 300,
//   "id": "qbfL7",
//   "margin": {
//     "top": true,
//     "bottom": true
//   },
//   "height": 300
// }

/**
 * 需要登录才能查看内容
 */
export default defineComponent({
  name: 'LocalDocCard',

  props: ['meta'],

  setup({ meta }) {
    console.log('meta => ', meta)

    if (meta.status != 'done') {
      return () => <div class="border p-4 m-4">文件状态错误：{meta.status}</div>
    }

    if (meta.collapsed) {
      return () => (
        <div class="border p-4 m-4">
          <div class="flex flex-row items-center">
            <img src={PdfIcon} style={{ width: '24px', height: '24px' }} />
            <div class="flex-1">
              <span class="mx-3">{meta.name}</span>
              <span class="text-gray-300 text-sm">({superbytes(meta.size)})</span>
            </div>
            <div>
              <el-button icon="el-icon-view" size="mini" circle></el-button>
            </div>
          </div>
        </div>
      )
    }

    const iframeHref = `${meta.src}?view=doc_embed&from=hduer.cn`.replace(
      'attachments',
      'office'
    )
    return () => (
      <div class="border m-4 flex-col">
        <div class="mx-2 p-1 text-sm flex flex-row items-center">
          <img src={PdfIcon} style={{ width: '18px', height: '18px' }} />
          <div class="flex-1">
            <span class="mx-3">{meta.name}</span>
            <span class="text-gray-300 text-sm">({superbytes(meta.size)})</span>
          </div>
          <div>
            <el-button icon="el-icon-view" size="mini" circle></el-button>
          </div>
        </div>
        <hr />
        <div style={{ height: `${meta.height ?? 300}px` }}>
          <iframe src={iframeHref} frameborder="1" class="h-full w-full"></iframe>
        </div>
      </div>
    )
  }
})
