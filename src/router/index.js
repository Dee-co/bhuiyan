import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import EmiCalculator from '../views/EmiCalculator.vue';
import BlogPost from '../views/BlogPost.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/emiCalculator',
      name: 'emiCalculator',
      component: EmiCalculator
    },
    {
      path: '/blogPost',
      name: 'blogPost',
      component: BlogPost
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
