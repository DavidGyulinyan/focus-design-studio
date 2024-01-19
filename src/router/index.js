import { createRouter, createWebHistory } from 'vue-router'
import ProjectsView from '../views/ProjectsView.vue'
import ServicesView from '../views/ServicesView.vue'
import AboutUsView from '../views/AboutUsView.vue'
import JoinUsView from '../views/JoinUsView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import HomeView from '@/views/HomeView.vue'


let routes = [
  {
    path: '/',
    name: "home",
    component: HomeView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView
  },
  {
    path: '/about-us',
    name: 'about us',
    component: AboutUsView
  },
  {
    path: '/join-us',
    name: 'join us',
    component: JoinUsView
  },
  {
    path: '/contact-us',
    name: 'contact',
    component: ContactUsView
  }
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
