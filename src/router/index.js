import Vue from 'vue'
import Router from 'vue-router'
import Adopt from '../page/Adpot/Adopt'
import Docotor from '../page/Docotor/Docotor'
import News from '../page/News/News'
import Publish from '../page/Publish/Publish'
import Login from '../page/Login/Login'
import Register from '../page/Register/Register'
import NewsDetail from '../page/News/NewsDetail'
import Profile from '../page/Profile/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/adopt'
    },
    {
      path: '/adopt',
      component: Adopt
    },
    {
      path: '/docotor',
      component: Docotor
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/publish',
      component: Publish
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/newsDetail',
      component: NewsDetail
    },
    {
      path: '/profile',
      component: Profile
    }
  ]
})
