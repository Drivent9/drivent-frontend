import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import PaymentForm from './creditCard';
import ChosenTicket from './chosenTicket';
import CompletedPayment from './completedPayment';

export default function PaymentDashBoard() {
  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>

      <ChosenTicket />

      <PaymentForm />

      <CompletedPayment />
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
