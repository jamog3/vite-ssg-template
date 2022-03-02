<script setup lang="ts">
import 'what-input'
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import { nextTick, onMounted, inject } from 'vue'

const $smoothScroll = inject('smoothScroll')
const $route = useRoute()
const scrollToHash = (hash: string) => {
  nextTick(() => {
    // Note: #を削除
    const id = hash.slice(1)
    $smoothScroll({
      scrollTo: document.getElementById(id)
    })
  })
}
watch(
  () => $route.hash,
  (to) => {
    if (to) {
      scrollToHash(to)
    }
  }
)
onMounted(() => {
  if ($route.hash) {
    scrollToHash($route.hash)
  }
})
</script>

<template>
  <div>
    <main>
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<style lang="postcss">
@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
@keyframes fade-out {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

.fade-enter-active {
  animation: fade-in 0.24s;
}

.fade-leave-active {
  animation: fade-out 0.24s;
}
</style>
