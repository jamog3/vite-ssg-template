<template>
  <p>Hello I am Fuga</p>
</template>

<script lang="ts">
import { useHead } from '@vueuse/head'

export default {
  setup() {
    useHead({
      title: 'Hello Fuga',
      meta: [
        {
          name: 'description',
          content: 'Website description',
        },
      ],
    })
  }
}
</script>
