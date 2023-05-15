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
  const [clickedType, setClickedType] = useState();
  const [haveHotel, setHaveHotel] = useState();
  const { ticket } = useTicket(); //get Tickets
  const { ticketTypes } = useTicketTypes(); //get TicketTypes (qualquer coisa usa um console log)

  useEffect(() => {
    if (ticket?.status === 'PAID') {
      setPaymentStep(4);
    }
  }, [ticket?.status]);

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>

      {paymentStep >= 5 && (
        <TicketCard
          setPaymentStep={setPaymentStep}
          setTotal={setTotal}
          setDone={setDone}
          setClickedType={setClickedType}
        />
      )}

      {paymentStep >= 6 && (
        <Booking
          setPaymentStep={setPaymentStep}
          setTotal={setTotal}
          total={total}
          setDone={setDone}
          setHaveHotel={setHaveHotel}
        />
      )}

      {done && <Resume setPaymentStep={setPaymentStep} amount={total} setDone={setDone} />}

      {paymentStep === 3 && (
        <>
          <ChosenTicket
            amount={total}
            clickedType={clickedType}
            haveHotel={haveHotel}
            ticketTypeId={ticket?.ticketTypeId}
            ticketTypes={ticketTypes}
          />
          <PaymentForm setPaymentStep={setPaymentStep} ticketId={ticket?.id} />
        </>
      )}
      {paymentStep === 4 && (
        <>
          <ChosenTicket amount={total} ticketTypeId={ticket?.ticketTypeId} ticketTypes={ticketTypes} />{' '}
          <CompletedPayment />
        </>
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
