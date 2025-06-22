import { onMounted, onBeforeUnmount } from 'vue'

export function useInfiniteScroll(targetRef, callback, offset = 50) {
  let isLoading = false

  function handleScroll() {
    if (!targetRef.value || isLoading) return

    const scrollBottom = window.scrollY + window.innerHeight
    const rect = targetRef.value.getBoundingClientRect()
    const elementTop = rect.top + window.scrollY
    const elementBottom = elementTop + targetRef.value.offsetHeight

    if (scrollBottom >= elementBottom - offset) {
      isLoading = true

      const maybePromise = callback()

      if (maybePromise?.finally) {
        maybePromise.finally(() => {
          isLoading = false
        })
      } else {
        isLoading = false
      }
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })
}
