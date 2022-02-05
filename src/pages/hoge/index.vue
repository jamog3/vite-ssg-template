<script setup lang="ts">
import head from '@/functions/Head'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'

useHead(
  head({
    title: 'hoge',
    description: '',
    path: useRoute().path
  })
)
</script>

<template>
  <p>Hello I am Hoge</p>
</template>
