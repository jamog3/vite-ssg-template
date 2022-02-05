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
/* stylelint-disable */
@import 'the-new-css-reset/css/reset.css';
/* stylelint-enebled */
@import '@/assets/styles/common/variables/_index.css';
@import '@/assets/styles/common/_index.css';
</style>
