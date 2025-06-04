import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  /*[name="searchText"] прибрать? */
  input: document.querySelector('input'),
  button: document.querySelector('button'),
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
};
const { input, button, form, gallery } = refs;

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

let searchQuery = '';
function onInput(event) {
  // showLoader();
  searchQuery = event.target.value;
  !searchQuery.trim()
    ? button.setAttribute('disabled', ' ')
    : button.removeAttribute('disabled');
}
input.addEventListener('input', onInput);

function onFormSubmit(event) {
  showLoader();
  event.preventDefault();
  const axiosImagesData = getImagesByQuery(searchQuery)
    .then(imagesData => {
      if (!imagesData.length) {
        OnAxiosError();
      }
      clearGallery();
      createGallery(imagesData);
    })
    .catch(error =>
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected ` + error,
        position: 'topRight',
      })
    )
    .finally(() => {
      form.reset();
      hideLoader();
    });
}
form.addEventListener('submit', onFormSubmit);

function OnAxiosError() {
  iziToast.error({
    message:
      `❌ ` +
      `Sorry, there are no images matching your search query. Please try again!`,
    position: 'topRight',
  });
}
