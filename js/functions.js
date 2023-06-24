// Функция для проверки длины строки

const isStringValid = (string, maxLength) => maxLength >= string.length;

isStringValid('Апероль Шпиц', 20);
isStringValid('Апероль Шпиц любит бананчики', 80);

// Функция для проверки, является ли строка палиндромом

const isPalindrom = (string) => {
  const normalString = string.replaceAll(' ', '').toLowerCase();
  let newString = '';
  for (let i = normalString.length - 1; i >= 0; i = i - 1) {
    newString += normalString.at(i);
  }
  return normalString === newString;
};

isPalindrom('Апероль Шпиц');
isPalindrom('Sum summus mus');
isPalindrom('Лёша на полке клопа нашёл');

// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа

const returnNumber = (string) => {
  const newString = string.toString();
  let finalString = '';
  for (let i = 0; i < newString.length; i++) {
    if (!Number.isNaN(parseInt(newString[i], 10))) {
      finalString += newString[i];
    }
  }
  return parseInt (finalString, 10);
};

returnNumber('Апероль Шпиц родился 10 июля');
returnNumber('Апероль Шпиц');
returnNumber('Аперолю Шпицу 1 год и 11 месяцев');
