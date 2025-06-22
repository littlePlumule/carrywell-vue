import { createWebHistory, createRouter } from 'vue-router'
import { isValidCategory, findProductById } from '../utils/pathValidator'

const routes = [
  { path: '/', component: () => import('../pages/PageHome.vue') },
  {
    path: '/product',
    component: () => import('../pages/PageProduct.vue'),
    redirect: '/product/hot',
  },
  {
    path: '/product/:category',
    component: () => import('../pages/PageProduct.vue'),
    beforeEnter: (to, from, next) => {
      if (isValidCategory(to.params.category)) {
        next()
      } else {
        next({ name: 'NotFound' })
      }
    },
  },
  {
    path: '/product/:category/:productId',
    component: () => import('../pages/PageProductDetail.vue'),
    beforeEnter: (to, from, next) => {
      const category = to.params.category
      const productId = to.params.productId

      const isCategoryValid = isValidCategory(category)
      const product = findProductById(productId)

      if (isCategoryValid && product) {
        next()
      } else {
        next({ name: 'NotFound' })
      }
    },
  },
  {
    path: '/favorite',
    component: () => import('../pages/PageFavorite.vue'),
  },
  {
    path: '/cart',
    component: () => import('../pages/PageCart.vue'),
  },
  {
    path: '/login',
    component: () => import('../pages/PageLogin.vue'),
  },
  {
    path: '/register',
    component: () => import('../pages/PageRegister.vue'),
  },
  {
    path: '/forget-password',
    component: () => import('../pages/PageForgetPassword.vue'),
  },
  { path: '/about', component: () => import('../pages/PageAboutUs.vue') },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../pages/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return {
      top: 0,
      // behavior: 'smooth',
    }
  },
  routes,
})

export default router
