import { computed } from 'vue'
import { useStorage } from '../utils/storage'

const CART_KEY = 'cartItems'
const cartItems = useStorage(CART_KEY)

export function useCart() {
  function addToCart(product, quantity = 1) {
    const existing = cartItems.value.find((item) => item.id === product.id)

    if (existing) {
      existing.quantity += quantity
    } else {
      cartItems.value.push({ ...product, quantity })
    }
  }

  function removeFromCart(productId) {
    cartItems.value = cartItems.value.filter((item) => item.id !== productId)
  }

  function updateQuantity(productId, quantity) {
    const item = cartItems.value.find((item) => item.id === productId)
    if (item) {
      item.quantity = quantity
    }
  }

  function getQuantity(productId) {
    const item = cartItems.value.find((item) => item.id === productId)
    return item ? item.quantity : 0
  }

  const totalItem = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.quantity, 0),
  )

  const totalPrice = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0),
  )

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getQuantity,
    totalItem,
    totalPrice,
  }
}
