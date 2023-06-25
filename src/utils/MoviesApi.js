import { checkResponse } from './checkResponse';
import { URL_MOVIE_API } from '../config';

export const getMovies = () => {
  return fetch(URL_MOVIE_API)
    .then(checkResponse)
    .then((data) => {
      return data;
    });
};
