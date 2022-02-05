<script setup lang="ts">
import 'what-input'
</script>

<template>
  <main>
    <router-view />
  </main>
  <Footer />
</template>

<style lang="postcss">
[data-whatintent="mouse"]:focus,
[data-whatintent="touch"]:focus {
  outline: none;
}
</style>
