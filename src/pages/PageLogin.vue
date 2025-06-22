<script setup>
import { ref } from 'vue'
import { isNotEmpty, isValidEmail, minLength } from '../utils/validate'

import ComponentBanner from '../components/ComponentBanner.vue'
import FormInput from '../components/FormInput.vue'

const email = ref('')
const password = ref('')

const emailRef = ref()
const passwordRef = ref()

function onSubmit() {
  const validEmail = emailRef.value.validate()
  const validPassword = passwordRef.value.validate()

  if (validEmail && validPassword) {
    // console.log('送出表單')
  }
}
</script>

<template>
  <component-banner banner-title="Login" />

  <main class="login container">
    <div class="login__wrap">
      <h2 class="login__title hl4">登入</h2>
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
        <form-input
          id="password"
          ref="passwordRef"
          v-model.trim="password"
          type="password"
          name="password"
          label="密碼"
          :validators="[isNotEmpty, minLength(8)]"
        />
        <router-link class="form__forget-password hl7" to="/forget-password"
          >忘記密碼
        </router-link>
        <button class="form__submit primary-button hl5" type="submit">
          登入
        </button>
      </form>
      <router-link
        class="login__register-button secondary-button hl5"
        to="/register"
        >註冊</router-link
      >
    </div>
  </main>
</template>

<style lang="scss" scoped>
.login.container {
  margin-block: var(--xxl);
}

.login__wrap {
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

.login__title {
  margin-bottom: 40px;
  font-weight: var(--semi-bold);
  color: var(--regal-blue);
}

.login__wrap .form__wrap:last-of-type {
  margin: unset;
}

.login__register-button {
  padding: 8px 0;
  width: 100%;
  text-align: center;
  cursor: pointer;
  margin-top: 20px;
}
</style>
