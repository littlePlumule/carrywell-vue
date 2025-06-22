<script setup>
defineProps({
  bannerTitle: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="banner container-large">
    <h2 class="banner__title hl2">{{ bannerTitle }}</h2>
  </div>
</template>

<style lang="scss" scoped></style>
