import { Title } from './styled';
import styled from 'styled-components';

export default function ChosenTicket() {
  return (
    <Container>
      <Title>Ingresso escolhido</Title>
      <ChosenTicketContainer>
        <h1>Presencial + Com Hotel</h1>
        <h2>R$ 600</h2>
      </ChosenTicketContainer>
    </Container>
  );
}

const ChosenTicketContainer = styled.div`
  display: inline-block;
  padding: 36px 60px 30px 60px;
  background-color: #ffeed2;
  border-radius: 20px;

  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    text-align: center;
  }
  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
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
