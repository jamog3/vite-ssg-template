<template>
  <p>Hello I am Index</p>
  <img src="@/assets/test.jpg" alt="">
  <Counter />
  <MousePos />
  <pre>
    {{ JSON.stringify(user) }}
  </pre>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useHead } from '@vueuse/head'
import { useRootStore } from '@/store/root'

export default defineComponent({
  setup() {
    useHead({
      title: 'Hello',
      meta: [
        {
          name: 'description',
          content: 'Website description',
        },
      ],
    })

    const store = useRootStore()

    return {
      user: computed(() => store.user),
    }
  },
})
</script>
