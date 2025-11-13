// .vitepress/theme/index.ts
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import GiscusComments from './components/GiscusComments.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // Add Giscus comments to the doc-after slot (appears at bottom of content)
      'doc-after': () => h(GiscusComments)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // Register components globally
    app.component('GiscusComments', GiscusComments)
  }
} satisfies Theme
