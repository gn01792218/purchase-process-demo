import { createRouter, createWebHistory, RouteRecordRaw ,createWebHashHistory} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'MyData',
    component:()=>import('../views/MyData.vue')
  },
  {
    path: '/Payment',
    name: 'Payment',
    component:()=>import('../views/Payment.vue')
  },
  {
    path: '/OrderCreated',
    name: 'OrderCreated',
    component:()=>import('../views/OrderCreated.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // history:createWebHashHistory(),
  routes
})
export default router
