import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import {createRouter, createWebHashHistory, createWebHistory} from './router'

import HelloWorld from './components/HelloWorld.vue'
import Welcome from './components/Welcome.vue'

const routes = [
    {
        path: '/',
        name: 'welcome',
        component: Welcome
    },
    {
        path: '/helloWorld',
        name: 'helloWorld',
        component: HelloWorld
    },
  
]

const router = createRouter({
    // history: createWebHashHistory(), // createWebHistory()
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
