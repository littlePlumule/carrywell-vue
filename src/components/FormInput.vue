<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  validators: {
    type: Array,
    default: () => [],
  },
  modelValue: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['update:modelValue'])

defineExpose({ validate })

const localValue = ref(props.modelValue)
const touched = ref(false)
const errorMessage = ref('')

const showError = computed(() => touched.value && errorMessage)

watch(
  () => props.modelValue,
  (val) => {
    localValue.value = val
    validate()
  },
)

function validate() {
  touched.value = true
  for (const validator of props.validators) {
    const result = validator(localValue.value)
    if (result) {
      errorMessage.value = result
      return false
    }
  }
  errorMessage.value = ''
  return true
}

function onInput(e) {
  localValue.value = e.target.value
  emit('update:modelValue', e.target.value)
}

function onBlur() {
  touched.value = true
  validate()
}
</script>

<template>
  <div class="form__wrap">
    <input
      :id="id"
      :type="type"
      :name="name"
      class="form__input"
      :class="{ 'not-empty': localValue }"
      :value="localValue"
      @input="onInput"
      @blur="onBlur"
    />
    <label :for="id" class="form__title hl6">{{ label }}</label>
    <span
      class="form__error hl7"
      :style="{ visibility: showError ? 'visible' : 'hidden' }"
      >{{ errorMessage }}</span
    >
  </div>
</template>

<style lang="scss" scoped></style>
