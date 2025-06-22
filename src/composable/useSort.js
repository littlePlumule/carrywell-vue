import { ref, computed } from 'vue'

export function useSort(limitProducts) {
  const sortMethod = ref('最新上架')

  const sortedProducts = computed(() => {
    const products = [...limitProducts.value]
    switch (sortMethod.value) {
      case '價格高到低':
        return products.sort((a, b) => b.price - a.price)
      case '價格低到高':
        return products.sort((a, b) => a.price - b.price)
      default:
        return products
    }
  })

  function setSortMethod(method) {
    sortMethod.value = method
  }

  return {
    sortMethod,
    sortedProducts,
    setSortMethod,
  }
}
