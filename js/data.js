import {getRandomInteger,getRandomArrayElement} from './util.js';

// Задаем количество объектов в массиве с описанием фотографий. А также другие константы и массивы данных.

const PHOTO_DESCRIPTION_COUNT = 25;
const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;
const COMMENTS_COUNT = 30;
const COMMENTS_AVATAR_COUNT = 6;

const PHOTO_DESCRIPTIONS = [
  'Самая красивая фотография во Вселенной',
  'Уникальный фотоснимок',
  'Банальная фотокарточка',
  'Произведение искусства',
  'Реплика Мона Лизы',
  'Засвеченный кадр',
];

const COMMENTS_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const COMMENTS_NAMES = [
  'Апероль Шпиц',
  'Дед Кузьмич',
  'Дарт Сидиус',
  'Юрий Самохвалов',
  'Барри Аллен',
  'Марселлас Уоллис',
];

// Создаем функции для генерации ID

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };

};

const generateCommentId = createIdGenerator();

// Создаем функции для создания описания фотографии

const createMessage = () => Array.from({
  length: getRandomInteger(1, 2)},
() => getRandomArrayElement(COMMENTS_MESSAGES),).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger (1, COMMENTS_AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(COMMENTS_NAMES),
});

const createPhotoDescription = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
  likes: getRandomInteger (MIN_LIKES_COUNT, MAX_LIKES_COUNT),
  comments: Array.from(
    {length: getRandomInteger(0, COMMENTS_COUNT)},
    createComment,
  ),
});

// Создаем массив из 25 сгенерированных объектов. Каждый объект массива — описание фотографии, опубликованной пользователем

const getPhotoDescription = () => Array.from(
  {length: PHOTO_DESCRIPTION_COUNT},
  (_, pictureIndex) => createPhotoDescription(pictureIndex + 1)
);

export{getPhotoDescription};

