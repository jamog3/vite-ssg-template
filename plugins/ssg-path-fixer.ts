export function fixPathWhenSSG (route: any, _parent: any) {
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
  }  else {
    return route
  }
}
