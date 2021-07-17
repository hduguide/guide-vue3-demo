import { App } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

export default function importUiFramework(app: App) {
  // 按需载入 Element Plus 组件
  app.use(ElementPlus)
  return app
}
