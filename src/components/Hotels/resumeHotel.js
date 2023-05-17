import useHotelRooms from '../../hooks/api/useHotelsRooms';
import Button from '../Form/Button';
import { Title } from '../Paymentboard/styled';

export default function ResumeHotel({ bookingUser }) {
  const { hotelsRooms } = useHotelRooms(bookingUser.Room.hotelId);

  if (!bookingUser || !hotelsRooms) {
    return <></>;
  }
  console.log(hotelsRooms);
  return (
    <>
      <Title>Você já escolheu seu quarto:</Title>
      <p>{bookingUser.Room.id} (teste para ver o Room Id)</p>
      <p>{hotelsRooms.name} (teste para ver se hotelsRooms esta funcionando)</p>
      <Button>TROCAR DE QUARTO</Button>
    </>
  );
}
