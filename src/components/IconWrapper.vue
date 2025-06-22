<script setup>
import { computed } from 'vue'

import { iconMap } from '../mocks'

const props = defineProps({
  iconName: {
    type: String,
    required: true,
  },
})

const realIconName = computed(() => {
  return iconMap[props.iconName] || props.iconName
})
</script>

<template>
  <iconify-icon :icon="realIconName"></iconify-icon>
</template>

<style lang="scss" scoped></style>
