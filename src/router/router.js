import { createWebHistory, createRouter } from 'vue-router'
import { isValidCategory, findProductById } from '../utils/pathValidator'

import PageHome from '../pages/PageHome.vue'
import PageProduct from '../pages/PageProduct.vue'
import PageProductDetail from '../pages/PageProductDetail.vue'
import PageFavorite from '../pages/PageFavorite.vue'
import PageCart from '../pages/PageCart.vue'
import PageLogin from '../pages/PageLogin.vue'
import PageRegister from '../pages/PageRegister.vue'
import PageForgetPassword from '../pages/PageForgetPassword.vue'
import PageAboutUs from '../pages/PageAboutUs.vue'
import NotFound from '../pages/NotFound.vue'

const routes = [
  { path: '/', component: PageHome },
  {
    path: '/product',
    component: PageProduct,
    redirect: '/product/hot',
  },
  {
    path: '/product/:category',
    component: PageProduct,
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
    component: PageProductDetail,
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
    component: PageFavorite,
  },
  {
    path: '/cart',
    component: PageCart,
  },
  {
    path: '/login',
    component: PageLogin,
  },
  {
    path: '/register',
    component: PageRegister,
  },
  {
    path: '/forget-password',
    component: PageForgetPassword,
  },
  { path: '/about', component: PageAboutUs },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return {
      top: 0,
      // behavior: 'smooth',
    }
  },
  routes,
})

export default router
