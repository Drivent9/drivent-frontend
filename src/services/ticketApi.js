import api from './api';

export async function getTickets(token) {
  const response = await api.get('/tickets', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function postTickets(token) {
  const response = await api.post('/tickets', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
