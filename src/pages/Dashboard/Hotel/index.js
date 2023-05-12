import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { useContext } from 'react';
import UserContext from '../../../contexts/UserContext';
import { getTickets } from '../../../services/ticketApi';
import { useEffect, useState } from 'react';

export default function Hotel() {
  const { userData } = useContext(UserContext);
  const [tickets, setTickets] = useState(null);
  const [error, setError] = useState(null);

  async function getTicket() {
    try {
      const response = await getTickets(userData.token);
      if (response.ok) {
        setTickets(response.data);
      }
    } catch (err) {
      console.log(err);
      setError('Something went wrong. Please, try again.');
    }
  }

  useEffect(() => {
    getTicket();
  }, [userData.token]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      {tickets.TicketType.isRemote === true && (
        <MessageWhenTicketIsRemote>
          Sua modalidade de ingresso não inclui hospedagem
          <br />
          Prossiga para a escolha de atividades
        </MessageWhenTicketIsRemote>
      )}
      {tickets.status === 'RESERVED' && (
        <MessageWhenTicketIsNotPaid>
          Você precisa ter confirmado pagamento antes
          <br />
          de fazer a escolha de hospedagem
        </MessageWhenTicketIsNotPaid>
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const MessageWhenTicketIsRemote = styled.p`
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
