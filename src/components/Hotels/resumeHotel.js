import useHotelRooms from '../../hooks/api/useHotelsRooms';
import Button from '../Form/Button';
import { Title } from '../Paymentboard/styled';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getHotelsWithRooms } from '../../services/hotelApi';

export default function ResumeHotel({ bookingUser, setStepBooking, getBookingUser }) {
  const { hotelsRooms } = useHotelRooms(bookingUser.Room.hotelId);
  const [roomMate, setRoomMate] = useState('');
  const currentRoomBookings = hotelsRooms?.Rooms.find((room) => room.id === bookingUser.Room.id)?.Booking;
  useEffect(() => {
    getBookingUser();
    console.log(hotelsRooms);
    if (currentRoomBookings?.length === 1) {
      setRoomMate('Somente você');
    } else if (currentRoomBookings?.length === 2) {
      setRoomMate('Você e mais 1');
    } else if (currentRoomBookings?.length === 3) {
      setRoomMate('Você e mais 2');
    }
  }, [currentRoomBookings, roomMate]);

  async function changeRoom() {
    try {
      await getBookingUser();
      setStepBooking(0);
    } catch (err) {
      console.log(err);
    }
  }

  if (!bookingUser || !hotelsRooms) {
    return <></>;
  }

  //Define o tipo de quarto baseado na capacidade
  let type = '';
  if (bookingUser.Room.capacity === 2) {
    type = 'Double';
  } else if (bookingUser.Room.capacity === 3) {
    type = 'Triple';
  } else {
    type = 'Single';
  }

  return (
    <>
      <Title>Você já escolheu seu quarto:</Title>
      <ResumeCardStyled>
        <img src={hotelsRooms?.image} alt="hotelpicture" />
        <h1>{hotelsRooms?.name}</h1>
        <p>
          <strong>Quarto reservado</strong>
          <br />
          {bookingUser.Room.name} ({type})
        </p>
        <p>
          <strong>Pessoas no seu quarto</strong>
          <br />
          {roomMate}
        </p>
      </ResumeCardStyled>
      <Button onClick={() => changeRoom()}>TROCAR DE QUARTO</Button>
    </>
  );
}

const ResumeCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffeed2;
  border-radius: 10px;
  padding: 14px;
  height: 264px;
  width: 196px;
  margin-right: 20px;
  margin-bottom: 5px;
  > p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #3c3c3c;
    margin-bottom: 5px;
  }

  > h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #343434;
    margin-block: 10px;
  }

  > strong {
    font-weight: 700;
  }
  > img {
    width: 168px;
    height: 109px;
    object-fit: cover;
    border-radius: 5px;
    margin-inline: auto;
  }
  cursor: default;
`;
