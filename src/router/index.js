import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import ArticleCenter from '@/views/article/center'
import ArticleList from '@/views/article/list'
import ArticleDetaild from '@/views/article/details'
import NotFound from '@/views/other/NotFound'
import Search from '@/views/other/search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/article',
      name: 'article',
      component: ArticleCenter,
      redirect: '/article/list',
      children: [
        {
          path: 'list',
          name: 'list',
          component: ArticleList
        },
        {
          path: 'list/:type/:condition/:id',
          name: 'listByTag',
          component: ArticleList
        },
        {
          path: 'list/:type/:condition',
          name: 'listBySearch',
          component: ArticleList
        },
        {
          path: 'details/:id',
          name: 'details',
          component: ArticleDetaild
        }
      ]
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/not-found',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '**',
      name: '404',
      component: NotFound
    }
  ]
})
