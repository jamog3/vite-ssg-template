<template>
  <p>Hello I am Hoge</p>
</template>

<script lang="ts">
import head from '@/functions/Head'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import { useRootStore } from '@/store/root'

export default {
  setup() {
    useHead(
      head({
        title: 'hoge',
        description: '',
        path: useRoute().path
      })
    )

    const store = useRootStore()

    return {
      user: computed(() => store.user),
    }
  }
}
</script>
