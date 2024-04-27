const element = document.querySelector('.select__js');
const choices = new Choices(element, {
  searchEnabled: false,
  placeholder: true,
  searchPlaceholderValue: 'Поиск материала',
  noResultsText: 'Нет результатов'
});
