<script setup>
import { useFavorite } from '../composable/useFavorite'
import { useCart } from '../composable/useCart'

import IconWrapper from './IconWrapper.vue'

defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const { toggleFavorite, isFavorite } = useFavorite()
const { addToCart } = useCart()
</script>

<template>
  <li class="card__item">
    <router-link
      class="card__link"
      :to="`/product/${product.category}/${product.id}`"
    >
      <figure class="card__picture">
        <img
          :src="product.image"
          :alt="product.title"
          class="card__image"
          loading="lazy"
        />
        <button
          class="card__favorite"
          :class="{ 'card__favorite--active': isFavorite(product.id) }"
          @click.prevent.stop="toggleFavorite(product.id)"
        >
          <icon-wrapper icon-name="favorite" class="card__favorite-icon hl5" />
        </button>
      </figure>
      <div class="card__description">
        <h3 class="card__title hl6">{{ product.title }}</h3>
        <span class="card__price hl6">{{ product.price }}</span>
        <button class="card__cart" @click.prevent.stop="addToCart(product)">
          <icon-wrapper icon-name="cart" class="card__cart-icon hl3" />
        </button>
      </div>
    </router-link>
  </li>
</template>

<style lang="scss" scoped></style>
