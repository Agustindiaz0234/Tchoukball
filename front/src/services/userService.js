// src/services/userService.js

import api from './apiService';

const userService = {
  login: (user) => {
    return api.post('/api/Usuario/login', user)
      .then(response => {
        localStorage.setItem('token', response.data.token);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error en login', error);
        throw error;
      });
  },

  logout: () => {
    localStorage.removeItem('token');
  },

  get isLogged() {
    const token = localStorage.getItem('token');
    return token && token !== '';
  }
};

export default userService;
