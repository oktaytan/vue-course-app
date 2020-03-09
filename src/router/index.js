import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import NewCourse from '../views/NewCourse.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Courses',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/newCourse',
    name: 'Add Course',
    component: NewCourse
  },
  {
    path: '/editCourse/:id',
    name: 'Edit Course',
    component: NewCourse
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
