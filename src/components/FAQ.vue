<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { faqList } from '../mocks'
import IconWrapper from './IconWrapper.vue'

const openedIndex = ref(0)
const heights = ref([])
const answerRefs = ref([])

function toggle(index) {
  openedIndex.value = openedIndex.value === index ? null : index
}

onMounted(() => {
  nextTick(() => {
    heights.value = answerRefs.value.map((el) => el.scrollHeight)
  })
})
</script>

<template>
  <section class="main-faq container">
    <h2 class="main-faq__headline hl3">常見問題</h2>
    <ul class="main-faq__list">
      <li
        v-for="(faq, index) in faqList"
        :key="faq.id"
        class="main-faq__item"
        :class="{ 'main-faq__item--open': openedIndex === index }"
        @click="toggle(index)"
      >
        <div class="main-faq__title">
          <h3 class="main-faq__question hl5">{{ faq.question }}</h3>
          <icon-wrapper icon-name="downArrow" class="main-faq__icon hl4" />
        </div>
        <p
          :ref="(el) => (answerRefs[index] = el)"
          class="main-faq__answer hl6"
          :style="{ height: openedIndex === index ? `${heights[index]}px` : 0 }"
        >
          {{ faq.answer }}
        </p>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.main-faq {
  &__item {
    border-bottom: 1px solid var(--regal-blue);
    padding: 8px;
    cursor: pointer;

    &:first-child {
      border-top: 1px solid var(--regal-blue);
    }
  }

  &__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__question {
    font-weight: var(--bold);
    padding-block: 8px;
    color: var(--nobel);
  }

  &__item--open &__question {
    color: var(--regal-blue);
  }

  &__icon {
    color: var(--nobel);
    transform: rotate(0);
    transition: transform 0.3s;
  }

  &__item--open &__icon {
    color: var(--regal-blue);
    transform: rotate(180deg);
  }

  &__answer {
    letter-spacing: 1.2px;
    position: relative;
    color: var(--regal-blue);
    font-weight: var(--semi-bold);
    overflow: hidden;
    height: 0;
    transition: height 1s;
  }
}
</style>
