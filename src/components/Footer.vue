<script setup lang="ts">
</script>

<template>
  <nav class="text-xl mt-6">
    <router-link class="icon-btn mx-2" to="/">
      index
    </router-link>
    /
    <router-link class="icon-btn mx-2" to="/hoge">
      hoge
    </router-link>
    /
    <router-link class="icon-btn mx-2" to="/fuga">
      fuga
    </router-link>
  </nav>
  <div>
    current path: {{ $route.path }}
  </div>
</template>
