import { ref, computed } from 'vue'
import { products } from '../mocks'

export function useProductList(
  limitSize = 12,
  step = 12,
  initialFilterFn = null,
) {
  const filterFn = ref(initialFilterFn)
  const limit = ref(limitSize)

  function setFilter(fn) {
    filterFn.value = fn
    limit.value = limitSize
  }

  const filterProducts = computed(() => {
    return filterFn.value ? products.filter(filterFn.value) : products
  })

  const limitProducts = computed(() => {
    return filterProducts.value.slice(0, limit.value)
  })

  const loadMore = () => {
    if (limit.value < filterProducts.value.length) {
      limit.value += step
    }
  }

  return {
    limitProducts,
    loadMore,
    setFilter,
  }
}
