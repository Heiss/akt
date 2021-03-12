import Vue from 'vue'
import VueRouter from 'vue-router'
import "@/translations"

Vue.use(VueRouter)

let vm = new Vue()

function load(component) {
  return () => import(/* webpackChunkName: "[request]" */ `@/views/${component}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    title: vm.$gettext('Home'),
    component: load("Home"),
    icon: "mdi-home"
  },
  {
    path: '/settings',
    name: "Settings",
    title: vm.$gettext('Settings'),
    component: load("Settings"),
    icon: "mdi-cog"
  },
  {
    path: '/about',
    name: 'About',
    title: vm.$gettext('About'),
    component: load("About"),
    icon: "mdi-account"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
