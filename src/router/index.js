import Vue from 'vue'
import Router from 'vue-router'
import RouterController from '@/components/RouterController'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'RouterController',
      component: RouterController
    }
  ]
})
