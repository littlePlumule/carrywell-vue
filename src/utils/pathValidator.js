import { products, categories } from '../mocks'

export function isValidCategory(category) {
  return categories.find((cate) => cate.path === category)
}

export function findProductById(id) {
  return products.find((product) => product.id === id)
}
