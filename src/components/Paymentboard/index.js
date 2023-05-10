import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import PaymentForm from './creditCard';

export default function PaymentDashBoard() {
  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>

      <PaymentForm />
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
