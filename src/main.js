
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';


const form = document.querySelector('.form');

const loadMoreBtn = document.querySelector('.load-more');


let page = 1;

let currentQuery = '';

form.addEventListener('submit', async event => {
  event.preventDefault();

  currentQuery = event.target.elements.searchText.value.trim();

  page = 1;

  clearGallery();

  hideLoadMoreButton();

  if (!currentQuery) {
    return;
  }

  try {
    showLoader();

    const data = await getImagesByQuery(currentQuery, page);

    if (data.hits.length === 0) {
      iziToast.error({
        message: 'No images found',
      });

      return;
    }

    createGallery(data.hits);

    showLoadMoreButton();
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;

  try {
    showLoader();

    const data = await getImagesByQuery(currentQuery, page);

    createGallery(data.hits);

    const card = document
      .querySelector('.gallery-item')
      .getBoundingClientRect();

    window.scrollBy({
      top: card.height * 2,
      behavior: 'smooth',
    });

    const totalPages = Math.ceil(data.totalHits / 15);

    if (page >= totalPages) {
      hideLoadMoreButton();

      iziToast.info({
        message:
          "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
});