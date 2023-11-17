import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3e58b366 = () => interopDefault(import('../pages/bio.vue' /* webpackChunkName: "pages/bio" */))
const _0efc53e5 = () => interopDefault(import('../pages/test2.vue' /* webpackChunkName: "pages/test2" */))
const _604cb1f6 = () => interopDefault(import('../pages/testindex.vue' /* webpackChunkName: "pages/testindex" */))
const _5cc06e63 = () => interopDefault(import('../pages/works/myHome.vue' /* webpackChunkName: "pages/works/myHome" */))
const _27ba65d7 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/bio",
    component: _3e58b366,
    name: "bio"
  }, {
    path: "/test2",
    component: _0efc53e5,
    name: "test2"
  }, {
    path: "/testindex",
    component: _604cb1f6,
    name: "testindex"
  }, {
    path: "/works/myHome",
    component: _5cc06e63,
    name: "works-myHome"
  }, {
    path: "/",
    component: _27ba65d7,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
