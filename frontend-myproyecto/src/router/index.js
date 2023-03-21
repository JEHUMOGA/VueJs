import { createRouter, createWebHashHistory } from 'vue-router'

import adminRouter from '@/modules/admin/router'
import alumnoRouter from '@/modules/alumno/router'
import asesorRouter from '@/modules/asesor/router'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/components/Login'),
  },
  {
    path: '/admin',
    ...adminRouter
  },
  {
    path: '/alumno',
    ...alumnoRouter
  },
  {
    path: '/asesor',
    ...asesorRouter
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router