import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelApi from '../../services/hotelApi';

export default function useHotelRooms(id) {
  const token = useToken();

  const {
    data: hotelsRooms,
    loading: hotelsRoomsLoading,
    error: hotelsRoomsError,
    act: getHotelsRooms,
  } = useAsync(() => hotelApi.getHotelsWithRooms(token, id));

  return {
    hotelsRooms,
    hotelsRoomsLoading,
    hotelsRoomsError,
    getHotelsRooms,
  };
}
