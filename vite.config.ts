import type { UserConfig } from 'vite'
import {} from 'vite-ssg'
import Markdown from 'vite-plugin-md'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import Vue from '@vitejs/plugin-vue'

const config: UserConfig = {
  plugins: [
    Vue({
      include: [/\.vue$/],
    }),
    Pages({
      extensions: ['vue'],
    }),
    Components({
      extensions: ['vue'],
    }),
  ],
  ssgOptions: {
    script: 'async',
    formatting: 'prettify',
  },
}

export default config
