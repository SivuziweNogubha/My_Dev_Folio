
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "f8ea0fa0-6fc6-45ad-8352-967dbf7223c5"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "/home/joshuanogubha/Personal_projects/My_Dev_Folio/app.config.ts"

export default /*@__PURE__*/ defuFn(cfg0, inlineConfig)
