<script setup>
import ComponentBanner from '../components/ComponentBanner.vue'
import AboutUs from '../components/AboutUs.vue'

import { aboutList } from '../mocks'
</script>

<template>
  <component-banner banner-title="About us" />

  <main class="about-container container">
    <section class="about">
      <about-us
        v-for="aboutItem in aboutList"
        :key="aboutItem.id"
        :image="aboutItem.image"
        :alt="aboutItem.alt"
        :title="aboutItem.title"
        :content="aboutItem.content"
      />
    </section>
  </main>
</template>

<style lang="scss" scoped>
.about-container {
  margin-block: var(--xxl);
}
</style>
