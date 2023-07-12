const thumbnailContainer = document.querySelector('.pictures');

const thumbnailTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createThumbnail = ({url, description, likes, comments}) => {
  const thumbnailElement = thumbnailTemplate.cloneNode(true);

  thumbnailElement.querySelector('.picture__img').src = url;
  thumbnailElement.querySelector('.picture__img').alt = description;
  thumbnailElement.querySelector('.picture__likes').textContent = likes;
  thumbnailElement.querySelector('.picture__comments').textContent = comments.length;

  return thumbnailElement;
};

const renderThumbnails = (pictures) => {
  const thumbnailFragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnailElement = createThumbnail(picture);
    thumbnailFragment.append(thumbnailElement);
  });
  thumbnailContainer.appendChild(thumbnailFragment);
};

export {renderThumbnails};
