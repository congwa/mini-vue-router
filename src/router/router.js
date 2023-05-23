import { ref, inject} from 'vue'
import RouterView from './RouterView.vue'
import RouterLink from './RouterLink.vue'
import { createWebHashHistory } from './history/hash'

const ROUTER_KEY = Symbol('__router__')

function createRouter(options) {
  return new Router(options)
}

function useRouter() {
  return inject(ROUTER_KEY)
}


class Router {
  constructor(options) {
      this.history = options.history
      this.routes = options.routes
      this.current = ref(this.history.url)
      
      this.history.bindEvents(() => {
          this.current.value = window.location.hash.slice(1)
      })
  }
  install(app) {
      app.provide(ROUTER_KEY, this)
      app.component('router-view', RouterView)
      app.component('router-link', RouterLink)
  }
}

export {createRouter, useRouter, createWebHashHistory}