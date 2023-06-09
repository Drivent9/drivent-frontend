import { Title } from './styled';
import styled from 'styled-components';

export default function ChosenTicket({ ticketType }) {
  if (!ticketType) {
    <p>Algo deu errado, por favor atualize a pagina</p>;
  }

  return (
    <Container>
      <Title>Ingresso escolhido</Title>
      <ChosenTicketContainer>
        {ticketType?.isRemote ? (
          <h1>{ticketType.name}</h1>
        ) : ticketType?.includesHotel ? (
          <h1>{ticketType.name} + Com Hotel</h1>
        ) : (
          <h1>{ticketType.name} + Sem Hotel</h1>
        )}

        <h2>R$ {ticketType?.price}</h2>
      </ChosenTicketContainer>
    </Container>
  );
}

const ChosenTicketContainer = styled.div`
  display: inline-block;
  padding: 36px 50px 30px 50px;
  background-color: #ffeed2;
  border-radius: 20px;

  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 19px;
    text-align: center;
    color: #454545;
  }
  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
    color: #898989;
    margin-top: 10px;
  }
`;

const Container = styled.div`
  margin-top: 15px;
  margin-bottom: 30px;
`;
