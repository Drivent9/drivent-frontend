import useAsync from '../useAsync';
import useToken from '../useToken';

import * as payment from '../../services/paymentApi.js';

export default function useCreatePayment() {
  const token = useToken();

  const {
    loading: createPaymentLoading,
    error: createPaymentError,
    act: createPayment,
  } = useAsync((data) => payment.createPayment(data, token), false);

  return {
    createPaymentLoading,
    createPaymentError,
    createPayment,
  };
}
