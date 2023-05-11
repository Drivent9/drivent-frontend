import api from './api';

export async function createPayment(body, token) {
  const response = await api.post('/payments/process', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
