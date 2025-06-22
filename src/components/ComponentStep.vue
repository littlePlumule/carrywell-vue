<script setup>
import { computed } from 'vue'

import { stepList } from '../mocks'

const props = defineProps({
  step: {
    type: String,
    required: true,
  },
})

const stepPos = computed(() => {
  switch (props.step) {
    case '1':
      return '10%'
    case '2':
      return '50%'
    case '3':
      return '100%'
    default:
      return '0%'
  }
})
</script>

<template>
  <nav class="step">
    <ul class="step__list" :style="{ '--step-pos': stepPos }">
      <li
        v-for="stepItem in stepList"
        :key="stepItem.number"
        class="step__item hl4"
        :class="{ 'step__item--active': step >= stepItem.number }"
      >
        <span class="step__number">{{ stepItem.number }}</span>
        <h3 class="step__title">{{ stepItem.title }}</h3>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped></style>
