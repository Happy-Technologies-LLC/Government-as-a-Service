<template>
  <div class="giscus-wrapper">
    <div
      id="giscus-container"
      class="giscus"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute, useData } from 'vitepress'

const route = useRoute()
const { isDark } = useData()

// Giscus configuration
const REPO = 'Happy-Technologies-LLC/Government-as-a-Service'
const REPO_ID = 'R_kgDOQGCQBw'
const CATEGORY = 'General'
const CATEGORY_ID = 'DIC_kwDOQGCQB84Cw743'

const loadGiscus = () => {
  const container = document.getElementById('giscus-container')
  if (!container) return

  // Remove existing script if present
  const existingScript = container.querySelector('script')
  if (existingScript) {
    existingScript.remove()
  }

  // Create new script
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', REPO)
  script.setAttribute('data-repo-id', REPO_ID)
  script.setAttribute('data-category', CATEGORY)
  script.setAttribute('data-category-id', CATEGORY_ID)
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'bottom')
  script.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  script.setAttribute('data-lang', 'en')
  script.setAttribute('data-loading', 'lazy')
  script.crossOrigin = 'anonymous'
  script.async = true

  container.appendChild(script)
}

onMounted(() => {
  loadGiscus()
})

// Reload when route changes (new page)
watch(() => route.path, () => {
  loadGiscus()
})

// Update theme when dark mode changes
watch(isDark, (newVal) => {
  const iframe = document.querySelector<HTMLIFrameElement>('.giscus-frame')
  if (iframe?.contentWindow) {
    iframe.contentWindow.postMessage(
      { giscus: { setConfig: { theme: newVal ? 'dark' : 'light' } } },
      'https://giscus.app'
    )
  }
})
</script>

<style scoped>
.giscus-wrapper {
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid var(--vp-c-divider);
}

/* Hide on print */
@media print {
  .giscus-wrapper {
    display: none !important;
  }
}
</style>
