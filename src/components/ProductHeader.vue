<script setup>
import DropDown from './DropDown.vue'
defineProps({
  productTitle: {
    type: String,
    required: true,
  },
  sortMethod: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['sort'])

function handleSort(sortType) {
  emit('sort', sortType)
}
</script>

<template>
  <header class="product__header">
    <h3 class="product__headline hl4">{{ productTitle }}</h3>
    <drop-down :sort-method="sortMethod" @sort="handleSort" />
  </header>
</template>

<style lang="scss" scoped>
.product {
  &__header {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    margin-bottom: 40px;
  }

  &__headline {
    font-weight: var(--bold);
    color: var(--regal-blue);
    line-height: 32px;
    border-bottom: 1px solid var(--regal-blue);
  }
}
</style>
