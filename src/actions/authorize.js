import axios from 'axios';
import { LOGIN } from './login';

export const authorize = data => dispatch => {
  axios
    .get('http://159.89.34.14/api/login', data)
    .then(response => {
      dispatch({ type: LOGIN, payload: response.data.user });
      // this.props.authorize(user);
    })
    .catch(err => dispatch({ type: 'ERROR', payload: err }));
};
