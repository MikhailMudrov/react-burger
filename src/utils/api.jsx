export const API = 'https://norma.nomoreparties.space/api/ingredients';

export const checkResponse = (res) => res.ok ? res.json()
  : Promise.reject(`Ошибка: ${res.status}`);
