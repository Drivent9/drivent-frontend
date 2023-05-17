import styled from 'styled-components';
import { Title } from '../Paymentboard/styled';
import { HiOutlineUser } from 'react-icons/hi';
import useHotelRooms from '../../hooks/api/useHotelsRooms';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from '../Form/Button';
import useBooking from '../../hooks/api/useBookings';
import { toBeDisabled } from '@testing-library/jest-dom/dist/matchers';

export default function HotelRooms({ clickedHotel }) {
  const { hotelsRooms, getHotelsRooms } = useHotelRooms(clickedHotel);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const { booking } = useBooking();
  const bookingFake = [
    {
      id: 1,
      userId: 1,
      roomId: 1070,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    { id: 2, userId: 2, roomId: 1071, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: 2, userId: 2, roomId: 1071, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  ];

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

  return (
    <Container>
      <Title>Ótima pedida! Agora escolha seu quarto:</Title>
      <RoomsContainer>
        {sortedRooms.map((room) => {
          const bookingsForRoom = bookingFake.filter((booking) => booking.roomId === room.id);
          const isFullyBooked = bookingsForRoom.length === room.capacity;
          const isPartiallyBooked = bookingsForRoom.length > 0 && bookingsForRoom.length < room.capacity;

          return (
            <Rooms
              key={room.id}
              clicked={room.id === selectedRoom}
              isFull={isFullyBooked}
              onClick={() => !isFullyBooked && handleRoomClick(room.id)}
            >
              <h1>{room.name}</h1>
              <IconContainer>
                {Array.from({ length: room.capacity }, (_, index) => (
                  <Icon
                    key={index}
                    isFull={isFullyBooked}
                    props={room.id === selectedRoom && index === room.capacity - 1 ? '#FF4791' : undefined}
                  />
                ))}
              </IconContainer>
            </Rooms>
          );
        })}
      </RoomsContainer>
      <Button>RESERVAR QUARTO</Button>
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
  fill: ${(props) => (props.isFull ? '#9D9D9D' : props.props || '#ffffff')};
`;
