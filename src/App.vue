<script setup lang="ts">
import ClipboardJS from 'clipboard'
import { notify } from '@kyvg/vue3-notification'

const clipboard = new ClipboardJS('.clip')
clipboard.on('success', (e) => {
  notify({
    title: 'Email copiado!',
  })
})

const clipboardPhone = new ClipboardJS('.clip-phone')
clipboardPhone.on('success', (e) => {
  notify({
    title: 'Telefone copiado!',
  })
})
</script>

<template>
  <main font-sans text="center gray-700 dark:gray-200">
    <notifications class="copy" />
    <NavMenu />
    <router-view />
  </main>
</template>

<style lang="scss">
.vue-notification {
  background: darken(#e5e7eb, 20);
  border-color: darken(#e5e7eb, 40);
  color: #444;
  letter-spacing: 1px;
}
</style>
