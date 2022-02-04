<template>
  <main>
    <router-view />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<script setup lang="ts">
import 'what-input'
</script>

<style lang="postcss">
[data-whatintent="mouse"],
[data-whatintent="touch"] {
  *:focus {
    outline: none;
  }
}
</style>
