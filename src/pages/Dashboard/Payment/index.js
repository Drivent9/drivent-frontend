import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import { getPersonalInformations } from '../../../services/enrollmentApi';
import PaymentDashBoard from '../../../components/Paymentboard';

import UserContext from '../../../contexts/UserContext';

export default function Payment() {
  const [hasEnrollment, setHasEnrollment] = useState({});
  const { userData } = useContext(UserContext);

  useEffect(() => {
    getPersonalInformations(userData.token)
      .then((r) => {
        setHasEnrollment(r);
      });
  }, []);

  if (hasEnrollment) {
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
