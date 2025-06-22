<script setup>
import { ref } from 'vue'
import { isNotEmpty, isValidEmail } from '../utils/validate'

import ComponentBanner from '../components/ComponentBanner.vue'
import FormInput from '../components/FormInput.vue'

const email = ref('')

const emailRef = ref()

function onSubmit() {
  const validEmail = emailRef.value.validate()

  if (validEmail) {
    // console.log('送出表單')
  }
}
</script>

<template>
  <component-banner banner-title="Forget Password" />

  <main class="register container">
    <div class="register__wrap">
      <h2 class="register__title hl4">忘記密碼</h2>
      <form class="form" novalidate @submit.prevent="onSubmit">
        <form-input
          id="email"
          ref="emailRef"
          v-model.trim="email"
          type="text"
          name="email"
          label="電子郵件"
          :validators="[isNotEmpty, isValidEmail]"
        />
        <button class="form__submit primary-button hl5" type="submit">
          傳送驗證碼
        </button>
      </form>
      <router-link
        class="register__login-button secondary-button hl5"
        to="/login"
      >
        登入
      </router-link>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.register.container {
  margin-block: var(--xxl);
}

.register__wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  width: 100%;
  min-width: 300px;
  margin: 0 auto;
  padding: 40px 60px;
  background-color: var(--white);
}

.register__title {
  margin-bottom: 40px;
  font-weight: var(--semi-bold);
  color: var(--regal-blue);
}

.register__login-button {
  padding: 8px 0;
  width: 100%;
  text-align: center;
  cursor: pointer;
  margin-top: 20px;
}
</style>
