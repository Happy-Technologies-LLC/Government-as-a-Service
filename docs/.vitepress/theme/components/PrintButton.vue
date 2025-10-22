<template>
  <button
    class="print-button"
    @click="handlePrint"
    :title="'Print this page (Ctrl/Cmd + P)'"
    aria-label="Print this page"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="6 9 6 2 18 2 18 9"></polyline>
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
      <rect x="6" y="14" width="12" height="8"></rect>
    </svg>
    <span class="print-button-text">Print Page</span>
  </button>
</template>

<script setup lang="ts">
const handlePrint = () => {
  window.print()
}
</script>

<style scoped>
.print-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  background-color: transparent;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
}

.print-button:hover {
  background-color: var(--vp-c-brand-1);
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(51, 65, 85, 0.2);
}

.print-button:active {
  transform: translateY(0);
}

.print-button svg {
  flex-shrink: 0;
}

/* Hide button when printing */
@media print {
  .print-button {
    display: none !important;
  }
}

/* Responsive: hide text on mobile */
@media (max-width: 640px) {
  .print-button-text {
    display: none;
  }

  .print-button {
    padding: 8px 12px;
  }
}
</style>
