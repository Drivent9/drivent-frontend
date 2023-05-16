import styled from 'styled-components';
import { Title } from '../Paymentboard/styled';
import { HiOutlineUser } from 'react-icons/hi';
import useHotelRooms from '../../hooks/api/useHotelsRooms';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from '../Form/Button';
import useBooking from '../../hooks/api/useBookings';

export default function HotelRooms({ clickedHotel }) {
  const { hotelsRooms, getHotelsRooms } = useHotelRooms(clickedHotel);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const { booking } = useBooking();

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
        {sortedRooms.map((room) => (
          <Rooms key={room.id} clicked={room.id === selectedRoom} onClick={() => handleRoomClick(room.id)}>
            <h1>{room.name}</h1>
            <IconContainer>
              {Array.from({ length: room.capacity }, (_, index) => (
                <Icon
                  key={index}
                  selectedColor={room.id === selectedRoom && index === room.capacity - 1 ? '#FF4791' : undefined}
                />
              ))}
            </IconContainer>
          </Rooms>
        ))}
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
  background-color: ${(props) => (props.clicked ? '#FFEED2' : '#ffffff')};
  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 23px;
    margin: 11px 0px 11px 16px;
    color: ${(props) => props.colorLetter || '#454545'};
  }
`;

const IconContainer = styled.div`
  margin: 11px 12px 11px auto;
`;

const Icon = styled(HiOutlineUser)`
  font-size: 22px;
  color: ${(props) => props.selectedColor || '#000'};
  fill: ${(props) => props.selectedColor || '#ffffff'};
`;

const FilledIcon = styled(HiOutlineUser)`
  fill: ${(props) => props.colorIcon || '#000'};
  color: ${(props) => props.colorIcon};
  font-size: 22px;
`;
