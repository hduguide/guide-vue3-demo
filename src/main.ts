import { createApp } from 'vue'
import importUiFramework from '@/utils/import-ui-framework'
import { createMetaManager } from 'vue-meta'
import router from '@/router/index'
import { key, store } from '@/store'
import App from './App.vue'
import '@/style/basic.styl'

const app = createApp(App)
const metaManager = createMetaManager()
importUiFramework(app).use(metaManager).use(router).use(store, key).mount('#app')
