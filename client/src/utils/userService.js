import tokenService from './tokenService';

const BASE_URL = '/api/users/';

function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(user)
  })
    .then(res => {
      if(res.ok) return res.json();
      throw new Error('Email already taken');
    })
    .then(({ token }) => {
      tokenService.setToken(token);
    });
}

function login(userData) {
  return fetch(BASE_URL + 'login', {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(userData)
  })
    .then(res => {
      if(res.ok) return res.json();
      throw new Error('Incorrect credentials given');
    })
    .then(({ token }) => {
      tokenService.setToken(token);
    })
}

function getUser() {
  return tokenService.getUserFromToken();
}

function logout() {
  return tokenService.setToken();
}

export default {
  signup,
  login,
  getUser,
  logout
};