import path from 'path'
import type { UserConfig } from 'vite'
import {} from 'vite-ssg'
import Layouts from 'vite-plugin-vue-layouts'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import Vue from '@vitejs/plugin-vue'
import { fixPathWhenSSG } from './plugins/ssg-path-fixer'

const config: UserConfig = {
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/],
    }),
    Pages({
      extendRoute: (route, parent) => {
        return fixPathWhenSSG(route, parent)
      }
    }),
    Layouts(),
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
