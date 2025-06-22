<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { categories } from '../mocks'
import { useInfiniteScroll } from '../composable/useInfiniteScroll'
import { useProductList } from '../composable/useProductList'
import { useSort } from '../composable/useSort'

import ComponentSidebar from '../components/ComponentSidebar.vue'
import ComponentBanner from '../components/ComponentBanner.vue'
import ComponentCard from '../components/ComponentCard.vue'
import ProductHeader from '../components/ProductHeader.vue'

const route = useRoute()

const productTitle = computed(() => {
  const categoryPath = route.params.category
  const foundCategory = categories.find(
    (category) => category.path === categoryPath,
  )
  return foundCategory ? foundCategory.label : null
})

const { limitProducts, loadMore, setFilter } = useProductList()
const { sortMethod, sortedProducts, setSortMethod } = useSort(limitProducts)

watch(
  () => route.params.category,
  (categoryPath) => {
    categoryPath === 'hot'
      ? setFilter(null)
      : setFilter((product) => product.category === categoryPath)
  },
  { immediate: true },
)

function handleSort(sortType) {
  setSortMethod(sortType)
}

const cardList = ref(null)
useInfiniteScroll(cardList, loadMore)
</script>

<template>
  <component-banner banner-title="Product" />

  <main class="product-container container">
    <component-sidebar />

    <section class="product">
      <product-header
        :product-title="productTitle"
        :sort-method="sortMethod"
        @sort="handleSort"
      />

      <ul ref="cardList" class="card__list">
        <component-card
          v-for="product in sortedProducts"
          :key="product.id"
          ref="cardItem"
          :product="product"
        />
      </ul>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.product-container {
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

@media screen and (max-width: 768px) {
  .product-container {
    flex-direction: column;
    margin: unset;
    margin-bottom: var(--xxl);
  }

  .product {
    width: 100%;
  }
}
</style>
