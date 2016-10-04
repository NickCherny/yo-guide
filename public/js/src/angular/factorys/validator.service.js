export default function () {
  return {
    emailTpl: /([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}/,
    nameTpl: /.{3,}/,
    passwordTpl: /^\w{8,}/,
    phoneTpl: /^\d/,
    checkEmpty: (value) => {
      let res = false
      if (value !== '' && value) {
        res = true
      }
      return res
    },
    checkNumber: (value) => {
      let res = false
      if (value.search(/[0-9]/) !== -1) {
        res = true
      }
      return res
    },
    pwd: (value) => {
      let pas = false
      if (typeof value === 'string') {
        if (value.match(/^([a-z|A-Z|0-9]{8,20})/g)) {
          pas = true
        }
      }
      return pas
    },
    comparePassword: (value, value2) => {
      let res = true
      if (value === value2) {
        res = false
      }
      return res
    },
    email: (value) => {
      let res = false
      if (!value) {
        if (value.search(this.emailTpl) !== -1) {
          res = true
        }
      }
      return res
    },
    helpers: {
      empty: 'Поле должно быть заполнено',
      email: 'Неверный ввод электронной почты',
      password: 'Ненадёжный',
      passwordCompare: 'Пароли не совподают',
      phone: 'Некоректно введён номер телефона',
      textMin: 'Текст слишком короткий',
      textMax: 'Текст не должен привышать 200 символов'
    }
  }
}
