<script setup lang="ts">
import head from '@/functions/Head'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import { useRootStore } from '@/store/root'

useHead(
  head({
    title: 'index',
    path: useRoute().path
  })
)

const store = useRootStore()
const user = computed(() => store.user)
</script>

<template>
  <p>Hello I am Index</p>
  <img src="@/assets/test.jpg" alt="">
  <Counter />
  <MousePos />
  <pre>
    {{ JSON.stringify(user) }}
  </pre>
</template>
