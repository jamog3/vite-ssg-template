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
import head from '@/functions/Head'
import { useRoute } from 'vue-router'
import { computed, defineComponent } from 'vue'
import { useHead } from '@vueuse/head'
import { useRootStore } from '@/store/root'

export default defineComponent({
  setup() {
    useHead(
      head({
        title: 'index',
        path: useRoute().path
      })
    )

    const store = useRootStore()

    return {
      user: computed(() => store.user),
    }
  },
})
</script>
