import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/PageHome'
import Profile from '@/pages/PageProfile'
import Category from '@/pages/PageCategory'
import ThreadShow from '@/pages/PageThreadShow'
import ThreadEdit from '@/pages/PageThreadEdit'
import ThreadCreate from '@/pages/PageThreadCreate'
import NotFound from '@/pages/PageNotFound'
import Forum from '@/pages/PageForum'
import Top from '@/pages/PageTop'
import Register from '@/pages/PageRegister'
import SignIn from '@/pages/PageSignIn'
import store from '@/store'

Vue.use(Router)

const router = new Router({
    routes: [
      { path: '/',                            name: 'Home',            component: Home },
      { path: '/top',                         name: 'Top',             component: Top },
      { path: '/register',                    name: 'Register',        component: Register,                             meta: { requiresGuest: true }},
      { path: '/signin',                      name: 'SignIn',          component: SignIn,                               meta: { requiresGuest: true } },
      { path: '/me',                          name: 'Profile',         component: Profile,       props: true,           meta: { requiresAuth: true } },
      { path: '/me/edit',                     name: 'ProfileEdit',     component: Profile,       props: {edit: true},   meta: { requiresAuth: true } },
      { path: '/category/:id',                name: 'Category',        component: Category,      props: true },
      { path: '/forum/:id',                   name: 'Forum',           component: Forum,         props: true },
      { path: '/thread/create/:forumId',      name: 'ThreadCreate',    component: ThreadCreate,  props: true,           meta: { requiresAuth: true } },
      { path: '/thread/:id',                  name: 'ThreadShow',      component: ThreadShow,    props: true },
      { path: '/thread/:id/edit',             name: 'ThreadEdit',      component: ThreadEdit,    props: true,           meta: { requiresAuth: true } },
      { path: '*',                            name: 'NotFound',        component: NotFound },
      {
        path: '/logout',
        name: 'SignOut',
        meta: { requiresAuth: true },
        beforeEnter (to, from, next) {
          store.dispatch('signOut')
            .then(() => next({name: 'Home'}))
        }
      },
  ],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
    console.log(`🚦 navigating to ${to.name} from ${from.name}`)

    store.dispatch('initAuthentication')
      .then(user => {
          if (to.matched.some(route => route.meta.requiresAuth)) {
              // protected route
              if (user) {
                next()
              } else {
                next({name: 'SignIn'})
              }
            } else if (to.matched.some(route => route.meta.requiresGuest)) {
              // protected route
                if (!user) {
                  next()
                } else {
                  next({ name: 'Home' })
                }
          } else {
             next()
          }
    })
})

export default router