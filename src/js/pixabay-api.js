import axios from 'axios';

export const getImagesByQuery = query => {
  axios.defaults.baseURL = 'https://pixabay.com/api/';
  const API_KEY = '50578368-dd70245762fcec5298974d7f8';
  const searchParams = new URLSearchParams({
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    q: query,
  });

  return axios.get(`?${searchParams}`).then(response => {
    return response.data.hits;
  });
};
