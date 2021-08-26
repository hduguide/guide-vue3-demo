import { createApp } from 'vue'
import importUiFramework from '@/utils/import-ui-framework'
import router from '@/router'
import { key, store } from '@/store'
import App from './App.vue'
import titleMixin from '@/common/mixin/title'

const app = createApp(App)
importUiFramework(app).mixin(titleMixin).use(router).use(store, key).mount('#app')
