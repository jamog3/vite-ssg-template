<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: '404',
  meta: [
    {
      name: 'robots',
      content: 'noindex'
    }
  ]
})
</script>

<template>
  <p class="hoge">404</p>
  <router-link to="/" class="icon-btn mx-2"> index </router-link>
</template>

<style lang="postcss" scoped>
.hoge {
  font-size: rem(32px);
}
</style>

<route>
{
  "meta": {
    "layout": "error"
  }
}
</route>
