import qs from 'qs';
import api from './api';

export async function getToken(code) {
  console.log(code);

  const response = await api.post('/oauth/github/login', { code });
  return response.data;
}
//
