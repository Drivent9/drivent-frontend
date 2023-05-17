import useHotelRooms from '../../hooks/api/useHotelsRooms';
import Button from '../Form/Button';
import { Title } from '../Paymentboard/styled';

export default function ResumeHotel({ bookingUser, setStepBooking }) {
  const { hotelsRooms } = useHotelRooms(bookingUser.Room.hotelId);

  function changeRoom() {
    setStepBooking(0);
  }

  if (!bookingUser || !hotelsRooms) {
    return <></>;
  }

  return (
    <>
      <Title>Você já escolheu seu quarto:</Title>
      <p>{bookingUser.Room.id} (teste para ver o Room Id)</p>
      <p>{hotelsRooms.name} (teste para ver se hotelsRooms esta funcionando)</p>
      <Button onClick={changeRoom}>TROCAR DE QUARTO</Button>
    </>
  );
}
