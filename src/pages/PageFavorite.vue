<script setup>
import { ref, computed } from 'vue'
import { useFavorite } from '../composable/useFavorite'
import { useInfiniteScroll } from '../composable/useInfiniteScroll'
import { useProductList } from '../composable/useProductList'
import { useSort } from '../composable/useSort'

import ComponentBanner from '../components/ComponentBanner.vue'
import ComponentCard from '../components/ComponentCard.vue'
import ProductHeader from '../components/ProductHeader.vue'
import ComponentEmpty from '../components/ComponentEmpty.vue'

const { favoriteIds } = useFavorite()

const { limitProducts, loadMore } = useProductList(16, 16, (product) =>
  favoriteIds.value.includes(product.id),
)

const { sortMethod, sortedProducts, setSortMethod } = useSort(limitProducts)

function handleSort(sortType) {
  setSortMethod(sortType)
}

const hasFavorites = computed(() => sortedProducts.value.length > 0)

const cardList = ref(null)
useInfiniteScroll(cardList, loadMore)
</script>

<template>
  <component-banner banner-title="Favorite" />

  <template v-if="hasFavorites">
    <main class="favorite-container container">
      <section class="product">
        <product-header
          product-title="收藏清單"
          :sort-method="sortMethod"
          @sort="handleSort"
        />
        <ul ref="cardList" class="card__list">
          <component-card
            v-for="product in sortedProducts"
            :key="product.id"
            :product="product"
          />
        </ul>
      </section>
    </main>
  </template>

  <template v-else>
    <component-empty
      title="還沒有收藏的商品"
      description="快去逛逛，把喜歡的商品加入收藏吧！"
      link="/product"
      link-name="Shop Now"
    />
  </template>
</template>

<style lang="scss" scoped>
.favorite-container {
  display: flex;
  justify-content: space-between;
  margin-block: var(--xxl);
  position: relative;
}

.product {
  flex-grow: 1;
}

.card__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(262px, 1fr));
  gap: var(--xxl) var(--l);
}
</style>
