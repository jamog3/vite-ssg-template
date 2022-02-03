<template>
  <p>Hello I am Hoge</p>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useHead } from '@vueuse/head'
import { useRootStore } from '../../store/root'

export default {
  setup() {
    useHead({
      title: 'Hello Hoge',
      meta: [
        {
          name: 'description',
          content: 'Website description',
        },
      ],
      style: [
        {
          children: 'body {color: #567839}',
        },
      ],
    })

    const store = useRootStore()

    return {
      user: computed(() => store.user),
    }
  }
}
</script>
