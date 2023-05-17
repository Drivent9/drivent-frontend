import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import PaymentForm from './creditCard';
import ChosenTicket from './chosenTicket';
import CompletedPayment from './completedPayment';
import Booking from './booking';
import { useState } from 'react';
import TicketCard from './ticketCard.js';
import Resume from './resume.js';
import useTicket from '../../hooks/api/useTicket';
import { useEffect } from 'react';
import useTicketTypes from '../../hooks/api/useTicketTypes';
import { Title } from './styled';

export default function PaymentDashBoard() {
  const [paymentStep, setPaymentStep] = useState(5);
  const [total, setTotal] = useState(0);
  const [done, setDone] = useState(false);
  const [clicked, setClicked] = useState(0);
  const [clickedHotel, setClickedHotel] = useState(0);
  const [selectedTicket, setSelectedTicket] = useState(0);
  const { ticket, getTicket } = useTicket();
  const { ticketTypes } = useTicketTypes();

  useEffect(() => {
    if (ticket?.status === 'PAID') {
      setPaymentStep(4);
    } else if (ticket?.status === 'RESERVED') {
      setPaymentStep(3);
    }
  }, [ticket?.status]);

  const uniqueTicketTypes = [];
  const notRemoteTickets = [];

  ticketTypes?.forEach((ticketType) => {
    if (!uniqueTicketTypes.some((item) => item.name === ticketType.name)) {
      uniqueTicketTypes.push(ticketType);
    }
    if (!ticketType.isRemote) {
      notRemoteTickets.push(ticketType);
    }
  });

  const hotelPrice = notRemoteTickets[1]?.price - notRemoteTickets[0]?.price;

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>

      {paymentStep >= 5 && (
        <>
          <Title>Primeiro, escolha sua modalidade de ingresso</Title>
          <OptionsDiv>
            {uniqueTicketTypes?.map((t) => (
              <TicketCard
                clicked={clicked}
                setClicked={setClicked}
                setClickedHotel={setClickedHotel}
                setPaymentStep={setPaymentStep}
                setTotal={setTotal}
                setDone={setDone}
                setSelectedTicket={setSelectedTicket}
                ticketName={t.name}
                ticketPrice={t.price}
                ticketId={t.id}
                isRemote={t.isRemote}
              />
            ))}
          </OptionsDiv>
        </>
      )}

      {paymentStep >= 6 && (
        <>
          <Title>Ótimo! Agora escolha sua modalidade de hospedagem</Title>
          <OptionsDiv>
            {notRemoteTickets.map((h) => (
              <Booking
                setTotal={setTotal}
                setDone={setDone}
                clickedHotel={clickedHotel}
                setClickedHotel={setClickedHotel}
                setSelectedTicket={setSelectedTicket}
                includesHotel={h.includesHotel}
                ticketPrice={h.price}
                hotelPrice={hotelPrice}
                ticketId={h.id}
              />
            ))}
          </OptionsDiv>
        </>
      )}

      {done && (
        <Resume
          setPaymentStep={setPaymentStep}
          total={total}
          setDone={setDone}
          selectedTicket={selectedTicket}
          getTicket={getTicket}
        />
      )}

      {paymentStep === 3 && (
        <>
          <ChosenTicket ticketType={ticket?.TicketType} />
          <PaymentForm setPaymentStep={setPaymentStep} ticketId={ticket?.id} />
        </>
      )}
      {paymentStep === 4 && (
        <>
          <ChosenTicket ticketType={ticket?.TicketType} /> <CompletedPayment />
        </>
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const OptionsDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 25px;
  margin-bottom: 40px;
`;
