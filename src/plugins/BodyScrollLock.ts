import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock'

export default {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  install: (app: any) => {
    app.directive('scroll-lock', {
      // On mount (inserted)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mounted(el: HTMLElement, binding: any) {
        if (binding.value) {
          disableBodyScroll(el)
        }
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      updated(el: HTMLElement, binding: any) {
        if (binding.value) {
          disableBodyScroll(el)
        } else {
          enableBodyScroll(el)
        }
      },

      // On unmount (removed)
      unmounted(el: HTMLElement) {
        enableBodyScroll(el)
      }
    })
  }
}
