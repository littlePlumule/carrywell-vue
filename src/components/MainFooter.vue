<script setup>
import IconWrapper from './IconWrapper.vue'
</script>
<template>
  <footer class="main-footer">
    <div class="container-large">
      <div class="main-footer__wrap">
        <nav class="main-footer__navbar">
          <ul class="main-footer__nav-list">
            <li class="main-footer__nav-item">
              <router-link to="/" class="main-footer__nav-link hl6">
                常見問題
              </router-link>
            </li>
            <li class="main-footer__nav-item">
              <router-link class="main-footer__nav-link hl6" to="/about">
                品牌介紹
              </router-link>
            </li>
          </ul>
        </nav>
        <nav class="main-footer__terms">
          <ul class="main-footer__terms-list">
            <li class="main-footer__terms-item">
              <router-link to="/" class="main-footer__terms-link hl6">
                隱私權政策
              </router-link>
            </li>
            <li class="main-footer__terms-item">
              <router-link to="/" class="main-footer__terms-link hl6">
                免責政策
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="main-footer__wrap main-footer__wrap--down">
        <small class="main-footer__copyright hl7"
          >&copy; 2025 CarryWell. All rights reserved.</small
        >
        <ul class="main-footer__follow-list">
          <li class="main-footer__follow-item">
            <router-link to="/" class="main-footer__follow-link">
              <icon-wrapper icon-name="github" class="main-footer__icon hl5" />
            </router-link>
          </li>
          <li class="main-footer__follow-item">
            <router-link to="/" class="main-footer__follow-link">
              <icon-wrapper
                icon-name="instagram"
                class="main-footer__icon hl5"
              />
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
