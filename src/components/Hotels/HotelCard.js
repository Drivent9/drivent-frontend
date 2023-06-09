import styled from 'styled-components';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { useEffect, useState } from 'react';
import { getHotelsWithRooms } from '../../services/hotelApi';
import useHotelRooms from '../../hooks/api/useHotelsRooms';

export default function HotelCard(props) {
  const { id, name, image, setClickedHotel, clickedHotel } = props;
  const [types, setTypes] = useState('');
  const { userData } = useContext(UserContext);
  const [error, setError] = useState(null);
  const [room, setRoom] = useState(null);
  useEffect(getHotelWithRoom, []);

  //Calcula o numero de vagas:
  const { hotelsRooms } = useHotelRooms(id);
  const totalCapacity = hotelsRooms?.Rooms.reduce((sum, room) => sum + room.capacity, 0);
  const totalGuests = hotelsRooms?.Rooms.reduce((sum, room) => sum + room.Booking.length, 0);
  const availableVacancies = totalCapacity - totalGuests;

  async function getHotelWithRoom() {
    try {
      const response = await getHotelsWithRooms(userData.token, id);
      setRoom(response);
      defineType(response.Rooms);
    } catch (err) {
      setError('Something went wrong. Please, try again.');
    }
  }

  function defineType(arrayOfRooms) {
    const arrayOfTypes = [];
    const arrayOfCapacities = arrayOfRooms.map((i) => i.capacity);
    if (arrayOfCapacities.includes(1)) {
      arrayOfTypes.push('Single');
    }
    if (arrayOfCapacities.includes(2)) {
      arrayOfTypes.push('Double');
    }
    if (arrayOfCapacities.includes(3)) {
      arrayOfTypes.push('Triple');
    }
    if (arrayOfTypes.length === 1) {
      setTypes(arrayOfTypes[0]);
    } else if (arrayOfTypes.length === 3) {
      setTypes('Single, Double e Triple');
    } else {
      setTypes(`${arrayOfTypes[0]} e ${arrayOfTypes[1]}`);
    }
    return;
  }

  if (error) {
    return <p>{error}</p>;
  }

  function hotelCliked() {
    setClickedHotel(id);
  }

  return (
    <>
      <HotelCardStyled onClick={hotelCliked} clickedHotel={id === clickedHotel}>
        <img src={image} alt="hotelpicture" />
        <h1>{name}</h1>
        <p>
          <strong>Tipos de acomodação</strong>
          <br />
          {types}
        </p>
        <p>
          <strong>Vagas disponíveis:</strong>
          <br />
          {availableVacancies}
        </p>
      </HotelCardStyled>
    </>
  );
}

const HotelCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => (props.clickedHotel ? '#FFEED2' : '#ebebeb')};
  border-radius: 10px;
  padding: 14px;
  height: 264px;
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
  :hover {
    background-color: #ffeed2;
  }
  cursor: pointer;
`;
