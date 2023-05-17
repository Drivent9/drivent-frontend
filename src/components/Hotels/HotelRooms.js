import styled from 'styled-components';
import { Title } from '../Paymentboard/styled';
import { HiOutlineUser } from 'react-icons/hi';
import useHotelRooms from '../../hooks/api/useHotelsRooms';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from '../Form/Button';
import { toast } from 'react-toastify';
import useCreateBooking from '../../hooks/api/useCreateBooking';
import { changeBooking } from '../../services/bookingApi';
import useToken from '../../hooks/useToken';

export default function HotelRooms({ clickedHotel, setStepBooking, getBookingUser, bookingUser }) {
  const token = useToken();
  const { hotelsRooms, getHotelsRooms } = useHotelRooms(clickedHotel);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const { createBooking } = useCreateBooking();

  useEffect(() => {
    getHotelsRooms(clickedHotel);
  }, [clickedHotel]);

  if (!hotelsRooms || !hotelsRooms.Rooms) {
    return <p></p>;
  }

  const sortedRooms = [...hotelsRooms.Rooms].sort((a, b) => a.name.localeCompare(b.name));

  const handleRoomClick = (roomId) => {
    setSelectedRoom(roomId === selectedRoom ? null : roomId);
  };

  async function postBooking() {
    const body = {
      roomId: selectedRoom,
    };

    try {
      await createBooking(body);
      await getBookingUser();
      setStepBooking(1);
    } catch (error) {
      toast('Não foi possível reservar o seu quarto!');
    }
  }

  async function changeRoomFromBooking() {
    const body = {
      roomId: selectedRoom,
    };
    try {
      console.log(body, token, bookingUser.id);
      await changeBooking(body, token, bookingUser.id);
      setStepBooking(1);
      toast('Troca de quarto concluída com sucesso!');
    } catch (error) {
      toast('Não foi possível reservar o seu quarto!');
    }
  }

  return (
    <Container>
      <Title>Ótima pedida! Agora escolha seu quarto:</Title>
      <RoomsContainer>
        {sortedRooms.map((room) => {
          const isFull = room.Booking.length === room.capacity;
          const isPartiallyBooked = room.Booking.length > 0 && room.Booking.length < room.capacity;
          const partially = isPartiallyBooked ? room.capacity - room.Booking.length : room.capacity;

          return (
            <Rooms
              key={room.id}
              clicked={room.id === selectedRoom}
              isFull={isFull}
              onClick={() => !isFull && handleRoomClick(room.id)}
            >
              <h1>{room.name}</h1>
              <IconContainer>
                {Array.from({ length: room.capacity }, (_, index) => (
                  <Icon
                    key={index}
                    isFull={isFull}
                    isPartially={
                      isPartiallyBooked &&
                      (partially === 2 && room.capacity > 2 ? index === room.capacity - 1 : index) &&
                      '#000000'
                    }
                    props={room.id === selectedRoom && index === partially - 1 && '#FF4791'}
                  />
                ))}
              </IconContainer>
            </Rooms>
          );
        })}
      </RoomsContainer>
      {!bookingUser && selectedRoom && (
        <>
          <Button onClick={() => postBooking()}>RESERVAR QUARTO</Button>
        </>
      )}
      {bookingUser && selectedRoom && (
        <>
          <Button onClick={() => changeRoomFromBooking()}>CONFIRMAR TROCA</Button>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 40px;
`;

const RoomsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 37px;
`;

const Rooms = styled.div`
  border-radius: 10px;
  width: 190px;
  height: 45px;
  border: 1px solid #cecece;
  margin-right: 17px;
  margin-bottom: 8px;
  display: flex;
  background-color: ${(props) => (props.isFull ? '#E9E9E9' : props.clicked ? '#FFEED2' : '#ffffff')};
  :hover {
    cursor: ${(props) => (props.isFull ? 'default' : 'pointer')};
    background-color: ${(props) => (props.isFull ? '#E9E9E9' : '#ffeed2')};
  }
  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 23px;
    margin: 11px 0px 11px 16px;
    color: ${(props) => (props.isFull ? '#9D9D9D' : props.colorLetter || '#454545')};
  }
`;

const IconContainer = styled.div`
  margin: 11px 12px 11px auto;
`;

const Icon = styled(HiOutlineUser)`
  font-size: 22px;
  color: ${(props) => (props.isFull ? '#9D9D9D' : props.props || '#000000')};
  fill: ${(props) => (props.isFull ? '#9D9D9D' : props.props || props.isPartially || '#ffffff')};
`;
