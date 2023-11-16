import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _36e9f2fb = () => interopDefault(import('../pages/bio.vue' /* webpackChunkName: "pages/bio" */))
const _38b22d13 = () => interopDefault(import('../pages/test2.vue' /* webpackChunkName: "pages/test2" */))
const _0b833933 = () => interopDefault(import('../pages/testindex.vue' /* webpackChunkName: "pages/testindex" */))
const _53102155 = () => interopDefault(import('../pages/works/myhome.vue' /* webpackChunkName: "pages/works/myhome" */))
const _51703f05 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _36e9f2fb,
    name: "bio"
  }, {
    path: "/test2",
    component: _38b22d13,
    name: "test2"
  }, {
    path: "/testindex",
    component: _0b833933,
    name: "testindex"
  }, {
    path: "/works/myhome",
    component: _53102155,
    name: "works-myhome"
  }, {
    path: "/",
    component: _51703f05,
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
