import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export default function Hotel() {
  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      <MessageWheinTicketIsRemote>
        Sua modalidade de ingresso não inclui hospedagem
        <br />
        Prossiga para a escolha de atividades
      </MessageWheinTicketIsRemote>
      <MessageWhenTicketIsNotPaid>
        Você precisa ter confirmado pagamento antes
        <br />
        de fazer a escolha de hospedagem
      </MessageWhenTicketIsNotPaid>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const MessageWheinTicketIsRemote = styled.p`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
  color: #8e8e8e;
  margin-top: 240px;
`;

const MessageWhenTicketIsNotPaid = styled.p`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
  color: #8e8e8e;
  margin-top: 240px;
`;
