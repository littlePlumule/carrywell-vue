import { useStorage } from '../utils/storage'

const FAVORITE_KEY = 'favoriteProductIds'
const favoriteIds = useStorage(FAVORITE_KEY)

export function useFavorite() {
  function toggleFavorite(productId) {
    const index = favoriteIds.value.indexOf(productId)

    switch (index) {
      case -1:
        favoriteIds.value.push(productId)
        break
      default:
        favoriteIds.value.splice(index, 1)
    }
  }

  function isFavorite(productId) {
    return favoriteIds.value.includes(productId)
  }

  return {
    favoriteIds,
    toggleFavorite,
    isFavorite,
  }
}
