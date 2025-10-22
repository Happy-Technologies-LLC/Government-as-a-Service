// .vitepress/theme/index.ts
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import PrintButton from './components/PrintButton.vue'
import GiscusComments from './components/GiscusComments.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // Add print button to the doc-top slot (appears at top of content)
      'doc-top': () => h(PrintButton),
      // Add Giscus comments to the doc-after slot (appears at bottom of content)
      'doc-after': () => h(GiscusComments)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // Register components globally
    app.component('PrintButton', PrintButton)
    app.component('GiscusComments', GiscusComments)
  }
} satisfies Theme
