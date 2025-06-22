<script setup>
import { ref } from 'vue'
import {
  isNotEmpty,
  isValidEmail,
  isSamePassword,
  minLength,
  maxLength,
} from '../utils/validate'

import ComponentBanner from '../components/ComponentBanner.vue'
import FormInput from '../components/FormInput.vue'

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const nameRef = ref()
const emailRef = ref()
const passwordRef = ref()
const confirmRef = ref()

function onSubmit() {
  const validName = nameRef.value.validate()
  const validEmail = emailRef.value.validate()
  const validPassword = passwordRef.value.validate()
  const validConfirm = confirmRef.value.validate()

  if (validName && validEmail && validPassword && validConfirm) {
    // console.log('送出表單')
  }
}
</script>

<template>
  <component-banner banner-title="Register" />

  <main class="register container">
    <div class="register__wrap">
      <h2 class="register__title hl4">註冊</h2>
      <form class="form" novalidate @submit.prevent="onSubmit">
        <form-input
          id="name"
          ref="nameRef"
          v-model.trim="name"
          type="text"
          name="name"
          label="姓名"
          :validators="[isNotEmpty, maxLength(40)]"
          error="不能為空白、必須在40字以內！"
        />
        <form-input
          id="email"
          ref="emailRef"
          v-model.trim="email"
          type="text"
          name="email"
          label="電子郵件"
          :validators="[isNotEmpty, isValidEmail]"
          error="不能為空白、必須包含 @ 符號！"
        />
        <form-input
          id="password"
          ref="passwordRef"
          v-model.trim="password"
          type="password"
          name="password"
          label="密碼"
          :validators="[isNotEmpty, minLength(8)]"
          error="不能為空白、必須在8字以上！"
        />
        <form-input
          id="confirm-password"
          ref="confirmRef"
          v-model.trim="confirmPassword"
          type="password"
          name="confirm-password"
          label="確認密碼"
          :validators="[isNotEmpty, minLength(8), isSamePassword(password)]"
        />
        <button class="form__submit primary-button hl5" type="submit">
          註冊
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
