<script setup lang="ts">
</script>

<template>
  <footer>
    <nav class="text-xl mt-6">
      <router-link to="/" class="icon-btn mx-2"> index </router-link>
      /
      <router-link to="/hoge" class="icon-btn mx-2"> hoge </router-link>
      /
      <router-link to="/fuga" class="icon-btn mx-2"> fuga </router-link>
    </nav>
    <div>current path: {{ $route.path }}</div>
  </footer>
</template>
