<script setup lang="ts">
import head from '@/functions/Head'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import { useRootStore } from '@/store/root'

useHead(
  head({
    title: 'index',
    path: useRoute().path
  })
)

const store = useRootStore()
const user = computed(() => store.user)
const isModalShow = ref(false)
</script>

<template>
  <div>
    <p>Hello I am Index</p>
    <img class="image" src="@/assets/images/test.jpg" width="640" height="485" alt="" loading="lazy" />
    <button @click="isModalShow = true">show modal</button>
    <div v-show="isModalShow" v-scroll-lock="isModalShow" class="modal">
      <div class="body">
        <button @click="isModalShow = false">hide modal</button>
      </div>
    </div>
    <Counter />
    <MousePos />
    <div class="hoge">a</div>
    <div class="hoge3">a</div>
    <div class="hoge4">a</div>
    <pre>
      {{ JSON.stringify(user) }}
    </pre>
  </div>
</template>

<style lang="postcss" scoped>
.image {
  display: block;
  width: 100%;
  max-width: 640px;
  height: auto;
}

.hoge {
  display: block;
  background: #00f;
  @media screen and (--media-pc) {
    display: grid;
  }
}

.hoge3 {
  color: #ddd;
  font-size: rem(16px);
}

.hoge4 {
  display: grid;
  max-width: var(--width-min);
  transition: margin-right 2s var(--animation-md) 0.5s;
  font-size: rem(10px);
  font-weight: bold;
  @media screen and (--media-pc) {
    display: flex;
  }
}

.modal {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  background: #ccc;

  & > .body {
    height: 200vh;
  }
}
</style>
