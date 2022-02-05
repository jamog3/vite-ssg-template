<template>
  <div class="counter">
    <div>Counter: {{ counter }}</div>
    <button @click="counter += 1">Inc</button>
    <button @click="counter -= 1">Dec</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, ref } from 'vue'

const props = withDefaults(
  defineProps<{ init?: number }>(), {
    init: 0
  })
const counter = ref(props.init || 0)
</script>

<style lang="postcss" scoped>
.counter {
  padding: 5px 10px 10px;
  border: 2px dashed #3eaf7c;
  font-size: rem(12px);
}
</style>
