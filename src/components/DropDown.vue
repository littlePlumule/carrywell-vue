<script setup>
import IconWrapper from './IconWrapper.vue'

const options = ['最新上架', '價格低到高', '價格高到低']
defineProps({
  sortMethod: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['sort'])

function handleSelect(option) {
  emit('sort', option)
}
</script>

<template>
  <div class="product__sort">
    <button class="product__sort-trigger">
      <span class="product__sort-selected hl7">{{ sortMethod }}</span>
      <span class="product__sort-arrow">
        <icon-wrapper
          icon-name="downArrow"
          class="product__sort-arrow-icon hl5"
        />
      </span>
    </button>
    <ul class="product__sort-option-list">
      <li
        v-for="option in options"
        :key="option"
        class="product__sort-option-item hl7"
        @click="handleSelect(option)"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.product__sort {
  display: flex;
  align-items: center;
  position: relative;

  &-trigger {
    display: flex;
    align-items: center;
    color: var(--regal-blue);
    font-weight: var(--semi-bold);
    border: 1px solid var(--regal-blue);
    padding: 0.2em 0.5em;
  }

  &-selected {
    margin-right: 8px;
  }

  &-option-list {
    display: none;
    color: var(--regal-blue);
    font-weight: var(--semi-bold);
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    text-align: center;
    z-index: 1;
    background-color: var(--white);
  }

  &:hover &-option-list {
    display: block;
  }

  &-option-item {
    padding: 0.5em 0.2em;
    white-space: nowrap;
    cursor: pointer;

    &:hover {
      background-color: var(--regal-blue);
      color: var(--white);
    }
  }
}
</style>
