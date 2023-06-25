import { checkResponse } from './checkResponse';
import { BASE_URL_API } from '../config';

function request(url, options) {
  return fetch(`${BASE_URL_API}${url}`, options).then(checkResponse);
}

export const getFilms = (token) => {
  return request('/movies', {
    method: 'GET',
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((data) => {
    return data;
  });
};

export const likeFilm = (data, token) => {
  return request('/movies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  }).then((data) => {
    return data;
  });
};

export const dislikeFilm = (id, token) => {
  return request(`/movies/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  }).then((data) => {
    return data;
  });
};

export const signUp = (name, email, password) => {
  return request(`/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });
};

export const signIn = (email, password) => {
  return request(`/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((data) => {
    localStorage.setItem('token', data.token);
    return data;
  });
};

export const getUserInfo = (token) => {
  return request(`/users/me`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((data) => data);
};

export const updateUserInfo = (data, token) => {
  return request(`/users/me`, {
    method: 'PATCH',
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((data) => data);
};
