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

export default function PaymentDashBoard() {
  const [paymentStep, setPaymentStep] = useState(5);
  const [total, setTotal] = useState(250);
  const [done, setDone] = useState(false);
  const [ticketTypeId, setTicketTypeId] = useState();
  const { ticket } = useTicket(); //get Tickets
  const { ticketTypes, getTicketTypes } = useTicketTypes();
  const [props, setProps] = useState();
  // const [reRender, setReRender] = useState(false);

  console.log(ticketTypes);

  useEffect(() => {
    // if (ticket?.status === 'PAID') {
    //   setPaymentStep(4);
    // } 
    // else if (ticket?.status === 'RESERVED') {
    //   setPaymentStep(3);
    // }
  }, [ticket?.status]);

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>

      {paymentStep >= 5 && (
        <TicketCard
          setPaymentStep={setPaymentStep}
          setTotal={setTotal}
          setDone={setDone}
          ticketTypes={ticketTypes}
          ticketName1={ticketTypes ? ticketTypes[0].name : 'Presencial'}
          ticketName2={ticketTypes ? ticketTypes[1].name : 'Online'}
          ticketPrice1={ticketTypes ? ticketTypes[0].price : 250}
          ticketPrice2={ticketTypes ? ticketTypes[1].price : 100}
          ticketId1={ticketTypes ? ticketTypes[0].id: 0}
          ticketId2={ticketTypes ? ticketTypes[1].id: 1}
          setTicketTypeId={setTicketTypeId}
        />
      )}

      {paymentStep >= 6 && (
        <Booking
          setPaymentStep={setPaymentStep}
          setTotal={setTotal}
          total={total}
          setDone={setDone}
          ticketTypes={props}
          ticketName1={ticketTypes ? ticketTypes[1].isRemote : true}
          ticketName2={ticketTypes ? ticketTypes[2].isRemote : true}
          ticketPrice1={ticketTypes ? ticketTypes[1].price : 0}
          ticketPrice2={ticketTypes ? ticketTypes[2].price : 350}
          ticketId1={ticketTypes ? ticketTypes[1].id: 1}
          ticketId2={ticketTypes ? ticketTypes[2].id: 2}
        />
      )}

      {done && <Resume setPaymentStep={setPaymentStep} amount={total} setDone={setDone} ticketTypeId={ticketTypeId} />}

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
