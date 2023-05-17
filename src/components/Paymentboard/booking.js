import styled from 'styled-components';

export default function Booking({
  setTotal,
  setDone,
  clickedHotel,
  setClickedHotel,
  setSelectedTicket,
  includesHotel,
  ticketPrice,
  hotelPrice,
  ticketId,
}) {
  function handleClick(ticketId) {
    setDone(true);
    setTotal(ticketPrice);
    setClickedHotel(ticketId);
    setSelectedTicket(ticketId);
  }

  return (
    <ChoiseCard clicked={clickedHotel === ticketId} onClick={() => handleClick(ticketId)}>
      <h1>{includesHotel ? 'Com Hotel' : 'Sem Hotel'}</h1>
      <span>+ R$ {includesHotel ? hotelPrice : 0}</span>
    </ChoiseCard>
  );
}

const ChoiseCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 11rem;
  height: 9rem;
  padding: 3px;
  border: 1px solid #cecece;
  text-align: center;
  border-radius: 20px;
  background-color: ${(props) => (props.clicked ? '#ffeed2' : 'white')};
  :hover {
    background-color: #ffeed2;
  }
  cursor: pointer;

  h1 {
    font-size: 16px;
  }

  span {
    font-size: 14px;
    color: #898989;
  }
`;
