import axios from 'axios';

export const LOGIN = 'LOGIN';
export const ERROR = 'ERROR';

const host = 'http://159.89.34.14';

export const login = data => dispatch => {
  axios
    .post(`${host}/api/login`, data)
    .then(response => {
      const token = response.data.token;
      const user = response.data.user;
      localStorage.setItem('Dragons!', token);
      dispatch({
        type: LOGIN,
        payload: user,
      });
    })
    .catch(err => {
      alert('Login failed.  Please try again.');
    });
};
