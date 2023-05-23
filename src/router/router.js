import { ref, inject} from 'vue'
import RouterView from './RouterView.vue'
import RouterLink from './RouterLink.vue'
import { createWebHashHistory } from './history/hash'
import { createWebHistory } from './history/html5'

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
          
          if(this.history.mode === 'hash') {
            this.current.value = window.location.hash.slice(1)
          } else {
            this.current.value = window.location.pathname
          }
      })
  }

  push(path) {
    this.history.push(path)
  }
  install(app) {
      app.provide(ROUTER_KEY, this)
      app.component('router-view', RouterView)
      app.component('router-link', RouterLink)
  }
}

export {createRouter, useRouter, createWebHashHistory, createWebHistory}