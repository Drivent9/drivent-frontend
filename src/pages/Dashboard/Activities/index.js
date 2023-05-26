import ActiviesIndexComponents from '../../../components/Activities/Index';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import useTicket from '../../../hooks/api/useTicket';

export default function Activities() {
  const { ticket } = useTicket();
  
  if (ticket?.status !== 'PAID') {
    return (
      <>
        <StyledTypography variant="h4">Escolha de atividades</StyledTypography>
        <Text>
          Você precisa ter confirmado pagamento antes
          <br />
          de fazer a escolha de atividades
        </Text>
      </>
    );
  }

  if (ticket?.TicketType.includesHotel === false) {
    return (
      <>
        <StyledTypography variant="h4">Escolha de atividades</StyledTypography>
        <Text>
          Sua modalidade de ingresso não necessita escolher
          <br />
          atividade. Você terá acesso a todas as atividades.
        </Text>
      </>
    );
  }

  return <ActiviesIndexComponents />;
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const Text = styled.p`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
  color: #8e8e8e;
  margin-top: 240px;
`;
