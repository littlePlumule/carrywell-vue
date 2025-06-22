<script setup>
import { mainCategory } from '../mocks'

defineProps({
  categories: {
    type: Array,
    default: () => mainCategory,
  },
})
</script>

<template>
  <section class="main-category container">
    <h2 class="main-category__headline hl3">類別推薦</h2>
    <ul class="main-category__list">
      <li
        v-for="category in categories"
        :key="category.id"
        class="main-category__item"
      >
        <router-link class="main-category__link" :to="category.link">
          <figure class="main-category__picture">
            <img
              :src="category.image"
              :alt="category.alt"
              class="main-category__image"
            />
          </figure>
          <h3 class="main-category__title hl5">{{ category.title }}</h3>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.main-category {
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
    gap: 20px;
  }

  &__picture {
    background-color: var(--white-smoke);
    width: 100%;
  }

  &__image {
    width: 100%;
    vertical-align: middle;
    transform: scale(1);
    transition: transform 0.3s;
  }

  &__item:hover &__image {
    transform: scale(1.05);
  }

  &__title {
    color: var(--regal-blue);
    font-weight: var(--bold);
    background-color: var(--white);
    padding: 8px var(--xxs);
    text-align: center;
  }
}

@media screen and (max-width: 768px) {
  // .main-category {
  //   &__list {
  //     grid-template-columns: 1fr 1fr;
  //   }
  // }
}
</style>
