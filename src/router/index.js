import { createRouter, createWebHistory } from 'vue-router'
import HakkimizdaView from '../views/Hakkimizda.vue'
import GizliMusteriOlView from '../views/GizliMusteriOl.vue'
import LoginFormView from '@/views/LoginForm.vue'
import AdminPageView from '@/views/AdminPage.vue'
import IletisimView from '@/views/Iletisim.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: "hakkimizda",
      component: HakkimizdaView
    },
    {
      path: '/gizli-musteri-ol',
      name: "gizli-musteri-ol",
      component: GizliMusteriOlView
    },
    {
      path: '/iletisim',
      name: "iletisim",
      component: IletisimView
    },
    {
      path: '/signin',
      name: "logirm-form",
      component: LoginFormView
    },
    {
      path: '/admin',
      name: "admin-sayfasi",
      component: AdminPageView
    }

  ]
})

export default router
