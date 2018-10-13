import Vue from 'vue'
import Router from 'vue-router'
import NewEmployee from '../components/NewEmployee'
import Dashboard from '../components/Dashboard'
import EditEmployee from '../components/EditEmployee'
import ViewEmployee from '../components/ViewEmployee'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'new-employee',
      component: NewEmployee
    },
    {
      path: '/edit/:id',
      name: 'edit-employee',
      component: EditEmployee
    },
    {
      path: '/:id',
      name: 'view-employee',
      component: ViewEmployee
    },

  ]
})
