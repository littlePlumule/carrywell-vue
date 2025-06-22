<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useCart } from '../composable/useCart'

import IconWrapper from './IconWrapper.vue'

const route = useRoute()
const navItem = [
  { label: '首頁', path: '/' },
  { label: '商品列表', path: '/product' },
  { label: '品牌介紹', path: '/about' },
]

const personNavItem = [
  { iconName: 'favoriteOutline', path: '/favorite', name: '收藏' },
  { iconName: 'bag', path: '/cart', name: '購物車', showQuantity: true },
  { iconName: 'profile', path: '/login', name: '會員' },
]

function isActive(path) {
  if (path === '/product') {
    return route.path.startsWith('/product')
  }
  return route.path === path
}

const isMenuActive = ref(false)
function toggleMenu() {
  isMenuActive.value = !isMenuActive.value
}

const { totalItem } = useCart()
</script>

<template>
  <header class="main-header">
    <div class="container-large">
      <h1 class="main-header__logo">
        <router-link class="main-header__logo-link hl2" to="/">
          CarryWell
        </router-link>
      </h1>
      <nav class="main-header__navbar">
        <div
          class="main-header__menu"
          :class="{ 'main-header__menu--active': isMenuActive }"
          @click="toggleMenu"
        >
          <icon-wrapper
            :icon-name="isMenuActive ? 'remove' : 'menu'"
            class="main-header__menu-icon hl3"
          />
        </div>
        <ul
          class="main-header__nav-list"
          :class="{ 'main-header__nav-list--active': isMenuActive }"
        >
          <li
            v-for="item in navItem"
            :key="item.path"
            class="main-header__nav-item"
            :class="{
              'main-header__nav-item--active': isActive(item.path),
            }"
          >
            <router-link class="main-header__nav-link hl5" :to="item.path">
              {{ item.label }}
            </router-link>
          </li>
        </ul>
      </nav>
      <ul class="main-header__icon-list">
        <li
          v-for="iconItem in personNavItem"
          :key="iconItem.path"
          class="main-header__icon-item"
          :class="{
            'main-header__icon-item--active': iconItem.path === route.path,
          }"
        >
          <router-link class="main-header__icon-link" :to="iconItem.path">
            <span
              v-if="iconItem.showQuantity && totalItem > 0"
              class="main-header__icon-quantity"
            >
              {{ totalItem }}
            </span>
            <icon-wrapper
              :icon-name="iconItem.iconName"
              class="main-header__icon hl5"
            />
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>
