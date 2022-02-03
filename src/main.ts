import devalue from '@nuxt/devalue'
import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import { useRootStore } from './store/root'
import App from './App.vue'

const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, isClient, initialState }) => {
    const pinia = createPinia()
    app.use(pinia)

    // Note: redirect
    if (isClient) {
      const pathname = location.pathname
      if (pathname.indexOf('index.html') >= 0) {
        location.replace(pathname.replace(/index\.html/, ''));
      } else if (pathname.indexOf('.html') >= 0) {
        location.replace('/');
      }
    }

    if (import.meta.env.SSR) {
      // this will be stringified and set to window.__INITIAL_STATE__
      initialState.pinia = pinia.state.value
    }
    else {
      // on the client side, we restore the state
      pinia.state.value = initialState?.pinia || {}
    }

    router.beforeEach((_to, _from, next) => {
      const store = useRootStore(pinia)

      store.initialize()
      next()
    })
  },
  {
    transformState(state) {
      return import.meta.env.SSR ? devalue(state) : state
    },
  },
)
