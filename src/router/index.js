import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/PageHome'
import Profile from '@/pages/PageProfile'
import Category from '@/pages/PageCategory'
import ThreadShow from '@/pages/PageThreadShow'
import NotFound from '@/pages/PageNotFound'
import Forum from '@/pages/PageForum'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',               name: 'Home',            component: Home },
    { path: '/me',             name: 'Profile',         component: Profile,       props: true},
    { path: '/me/edit',        name: 'ProfileEdit',     component: Profile,       props: {edit: true}},
    { path: '/category/:id',   name: 'Category',        component: Category,      props: true},
    { path: '/forum/:id',      name: 'Forum',           component: Forum,         props: true},
    { path: '/thread/:id',     name: 'ThreadShow',      component: ThreadShow,    props: true },
    { path: '*',               name: 'NotFound',        component: NotFound }
  ],
  mode: 'history'
})