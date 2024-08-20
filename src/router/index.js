import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('../views/VistaHome.vue')
const VentaView = () => import('../views/VistaVenta.vue')
const PagarView = () => import('../views/VistaPagar.vue')
const ConfirmacionView = () => import('../views/VistaConfirmacion.vue')
const SucursalesView = () => import('../views/VistaSucursales.vue')
const ContactenosView = () => import('../views/VistaContactenos.vue')
const NotFoundView = () => import('../views/NotFoundView.vue')
const PlanesView = () => import('../views/VistaPlanes.vue')
const PrepagoView = () => import('../views/VistaPrepago.vue')

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/venta', name: 'venta', component: VentaView },
  { path: '/pagar', name: 'pagar', component: PagarView },
  { path: '/confirmacion', name: 'confirmacion', component: ConfirmacionView },
  { path: '/contactenos', name: 'contactenos', component: ContactenosView },
  { path: '/sucursales', name: 'sucursales', component: SucursalesView },
  { path: '/planes', name: 'planes', component: PlanesView },
  { path: '/prepago', name: 'prepago', component: PrepagoView },
  { path: '/:pathMatch(.*)*', name: 'notfound', component: NotFoundView }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
