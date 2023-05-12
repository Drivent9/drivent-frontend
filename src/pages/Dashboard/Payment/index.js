import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import PaymentDashBoard from '../../../components/Paymentboard';
import useEnrollment from '../../../hooks/api/useEnrollment';

export default function Payment() {
  const { enrollment } = useEnrollment();

  if (enrollment) {
    return (
      <>
        <PaymentDashBoard />
      </>
    );
  }

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <Text>
        Você precisa completar sua inscrição antes
        <br />
        de prosseguir pra escolha de ingresso
      </Text>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const Text = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
  color: #8e8e8e;
  margin-top: 240px;
`;
