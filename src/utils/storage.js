import { ref, watch } from 'vue'

export function useStorage(key, defaultValue = []) {
  const data = ref(defaultValue)

  function load() {
    const saved = localStorage.getItem(key)
    data.value = saved ? JSON.parse(saved) : defaultValue
  }

  function save() {
    localStorage.setItem(key, JSON.stringify(data.value))
  }

  load()

  watch(data, save, { deep: true })
  return data
}
