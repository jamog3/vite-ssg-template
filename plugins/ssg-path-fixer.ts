// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fixPathWhenSSG(route: any) {
  if (process.env['VITE_SSG'] !== 'true') return route

  if (
    // (route.component.match(/\/index\.vue$/) && route.path !== '/') ||
    route.path !== '/'
  ) {
    console.log(`\nfix index path of ${route.component} for SSG\n`)
    return {
      ...route,
      path: `${route.path}/index`
    }
  } else {
    return route
  }
}
