import styled from 'styled-components';

export default function TicketCard({
  clicked,
  setClicked,
  setClickedHotel,
  setPaymentStep,
  setTotal,
  setDone,
  setSelectedTicket,
  ticketName,
  ticketPrice,
  isRemote,
  ticketId
}) {
  function handleClick(amount, ticketId) {
    setClicked(ticketId);
    setTotal(amount);
    setDone(false);
    setPaymentStep(6);
    setClickedHotel(0);
    setSelectedTicket(ticketId);

    if (isRemote) {
      setDone(true);
      setPaymentStep(5);
    }
  }

  return (
    <>
      <ChoiseCard
        clicked={clicked === ticketId}
        onClick={() => {
          handleClick(ticketPrice, ticketId);
        }}
      >
        <h1>{ticketName}</h1>
        <span>R$ {ticketPrice}</span>
      </ChoiseCard>
    </>
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
