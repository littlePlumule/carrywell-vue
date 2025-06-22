<script setup></script>

<template>
  <section class="main-banner">
    <div class="main-banner__slogan">
      <h2 class="main-banner__slogan-title hl2">品味隨行，質感從錢包開始</h2>
      <p class="main-banner__slogan-text hl4">Less is More，你的極簡錢包。</p>
      <router-link
        class="main-banner__slogan-button secondary-button hl4"
        to="/product"
      >
        Shop Now
      </router-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.main-banner {
  height: calc(100vh - 48px - var(--container-large-block) * 2);
  background:
    radial-gradient(ellipse, #d9d9d900, #78787800, #181818),
    url('@/assets/image/main-banner-small.jpg') no-repeat center center / cover;
  position: relative;

  &__slogan {
    color: var(--white);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    row-gap: 50px;
    align-items: center;
  }

  &__slogan-title {
    white-space: nowrap;
  }

  &__slogan-button {
    padding: 8px var(--m);
    font-family: var(--noto-serif-tc);
  }
}
</style>
