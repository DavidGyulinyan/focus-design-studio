import ProjectsView from '@/views/ProjectsView.vue'
import ServicesView from '@/views/ServicesView.vue'
import AboutUsView from '@/views/AboutUsView.vue'
import JoinUsView from '@/views/JoinUsView.vue'
import ContactUsView from '@/views/ContactUsView.vue'
import InteriorDesignView from '@/views/InteriorDesignView.vue'
import ArchitectureView from '@/views/ExteriorDesignView.vue'

export const pagesRoutes = [
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView,
    children: [
      {
        path: 'interior-design',
        name: 'interiorDesign',
        component: InteriorDesignView
      },
      {
        path: 'exterior-design',
        name: 'exteriorDesign',
        component: ArchitectureView
      }
    ]
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView
  },
  {
    path: '/about_us',
    name: 'aboutUs',
    component: AboutUsView
  },
  {
    path: '/join_us',
    name: 'joinUs',
    component: JoinUsView
  },
  {
    path: '/contact_us',
    name: 'contact',
    component: ContactUsView
  }
]