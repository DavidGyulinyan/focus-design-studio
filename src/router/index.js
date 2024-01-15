import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ServicesView from '../views/ServicesView.vue'
import AboutUsView from '../views/AboutUsView.vue'
import JoinUsView from '../views/JoinUsView.vue'
import ContactUsView from '../views/ContactUsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
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
      path: '/aboutUs',
      name: 'aboutUs',
      component: AboutUsView
    },
    {
      path: '/joinUs',
      name: 'joinUs',
      component: JoinUsView
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: ContactUsView
    },
  ]
})

export default router
