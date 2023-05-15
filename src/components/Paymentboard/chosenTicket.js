import { Title } from './styled';
import styled from 'styled-components';

export default function ChosenTicket({ ticketType }) {
  // remover amount, clickedType, haveHotel e usar as informações vindas do ticketTypeId, ticketTypes
  // usar for para percorrer o ticketTypes.id e comparar com o ticketTypeId para retornar
  // apagar os props (amount, clickedType, haveHotel) no index

  return (
    <Container>
      <Title>Ingresso escolhido</Title>
      <ChosenTicketContainer>
        <h1>
          {ticketType?.isRemote === true ? 'Online'
            : ticketType?.includesHotel === true ?
              'Presencial + Com Hotel'
              : 'Presencial + Sem Hotel'
          }
        </h1>
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
