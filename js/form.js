var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999) 999-99-99",{
  showMaskOnHover: false
});
im.mask(selector);

const validate = new window.JustValidate(document.querySelector('.form'), {
  errorLabelStyle: {
    color: '#FF5C00'
  },
  errorFieldStyle: {
    outline: '1px solid #FF5C00'
  }
});

validate
  .addField(document.querySelector('input[type="text"]'), [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Минимальная длина имени 2 символа',
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: 'Максимальная длина имени 15 символов',
    },
  ])

  .addField(document.querySelector('input[type="email"]'), [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Вы ввели неверный e-mail',
    },
  ])

  .addField(document.querySelector('input[type="tel"]'), [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели телефон',
    },
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue()

        return phone.length === 10
      },
      errorMessage: 'Введите телефон полностью',
    },
  ]);
