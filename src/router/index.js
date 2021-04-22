import Vue from 'vue'
import VueRouter from 'vue-router'
// Adds a loading bar at the top during page loads.
import routes from './routes'

Vue.use(VueRouter)


const router = new VueRouter({
  routes,
  // Use the HTML5 history API (i.e. normal-looking routes)
  // instead of routes with hashes (e.g. example.com/#/about).
  // This may require some server configuration in production:
  // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
  mode: 'history',
  // Simulate native-like scroll behavior when navigating to a new
  // route and using back/forward buttons.
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ selector: to.hash, behavior: 'smooth', offset: { y: 60 } })
        }, 500)
      })
    } else {
      return { x: 0, y: 0 }
    }
  },
})

// // Before each route evaluates...
// router.beforeEach((routeTo, routeFrom, next) => {
//   // If this isn't an initial page load...
//   if (routeFrom.name !== null) {
//     // Start the route progress bar.

//   }
// })
// // When each route is finished evaluating...
// router.afterEach((routeTo, routeFrom) => {
//   // Complete the animation of the route progress bar.

// })

export default router