<script setup lang="ts">
import 'what-input'
</script>

<template>
  <main>
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </main>
  <Footer />
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
