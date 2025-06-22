import validator from 'validator'

export function isNotEmpty(val) {
  return validator.isEmpty(val.toString() || '') ? '欄位未填寫！' : ''
}

export function minLength(len) {
  return (val) =>
    validator.isLength(val || '', { min: len }) ? '' : `至少 ${len} 字以上！`
}

export function maxLength(len) {
  return (val) =>
    validator.isLength(val || '', { max: len }) ? '' : `不能超過 ${len} 字！`
}

export function isSamePassword(val) {
  return (pw) => (pw === val ? '' : '密碼不一致！')
}

export function isValidEmail(val) {
  return validator.isEmail(val) ? '' : 'Email 格式錯誤！'
}
