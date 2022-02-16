import path from 'path'
import viteImagemin from 'vite-plugin-imagemin'
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
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    Vue({
      include: [/\.vue$/]
    }),
    Pages({
      extendRoute: (route) => {
        return fixPathWhenSSG(route)
      }
    }),
    Layouts(),
    Components({
      extensions: ['vue']
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 80
      },
      pngquant: {
        quality: [0.65, 0.8],
        speed: 1
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox'
          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      }
    })
  ],
  ssgOptions: {
    script: 'async',
    formatting: 'prettify'
  }
}

export default config
