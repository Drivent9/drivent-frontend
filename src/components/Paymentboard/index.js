import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import PaymentForm from './creditCard';
import ChosenTicket from './chosenTicket';
import CompletedPayment from './completedPayment';
import Booking from './booking';
import { useState } from 'react';

export default function PaymentDashBoard() {
  const [paymentStep, setPaymentStep] = useState(0);

  function nextStep() {
    setPaymentStep(paymentStep + 1);
  }

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>

      {paymentStep === 0 && <Booking nextStep={nextStep} />}
      {paymentStep === 1 && (
        <>
          <ChosenTicket /> <PaymentForm nextStep={nextStep} />
        </>
      )}
      {paymentStep === 2 && (
        <>
          <ChosenTicket /> <CompletedPayment />
        </>
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
