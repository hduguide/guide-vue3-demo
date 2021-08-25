import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta'
import importUiFramework from '@/utils/import-ui-framework'
import router from '@/router/index'
import { key, store } from '@/store'
import App from './App.vue'

const app = createApp(App)
const metaManager = createMetaManager()
importUiFramework(app).use(metaManager).use(router).use(store, key).mount('#app')
