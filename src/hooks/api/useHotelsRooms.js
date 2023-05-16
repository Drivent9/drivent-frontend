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
  } = useAsync(() => (id !== 0 ? hotelApi.getHotelsWithRooms(token, id) : null));

  return {
    hotelsRooms,
    hotelsRoomsLoading,
    hotelsRoomsError,
    getHotelsRooms,
  };
}
