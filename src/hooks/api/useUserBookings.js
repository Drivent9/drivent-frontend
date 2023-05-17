import useAsync from '../useAsync';
import useToken from '../useToken';

import * as bookingApi from '../../services/bookingApi';

export default function useUserBooking() {
  const token = useToken();

  const {
    data: bookingUser,
    loading: bookingUserLoading,
    error: bookingUserError,
    act: getBookingUser,
  } = useAsync(() => bookingApi.getUserBooking(token));

  return {
    bookingUser,
    bookingUserLoading,
    bookingUserError,
    getBookingUser,
  };
}
