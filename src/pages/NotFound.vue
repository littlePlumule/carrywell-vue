<script setup>
import ComponentBanner from '../components/ComponentBanner.vue'
import ComponentEmpty from '../components/ComponentEmpty.vue'
</script>

<template>
  <component-banner banner-title="Not Found" />
  <component-empty
    title="找不到頁面"
    description="您造訪的頁面不存在或已被移除。"
    link="/"
    link-name="Go Home"
  />
</template>

<style lang="scss" scoped></style>
