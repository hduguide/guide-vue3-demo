import { App } from 'vue'

/**
 * Element-plus 组件库
 */
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

/**
 * 图片查看
 */
import VueViewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

/**
 * Json Viewer
 */
import JsonViewer from 'vue3-json-viewer'

export default function importUiFramework(app: App) {
  // 按需载入 Element Plus 组件
  app.use(ElementPlus)
  app.use(VueViewer)
  app.use(JsonViewer)
  return app
}
