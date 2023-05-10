import { AiFillCheckCircle } from 'react-icons/ai';
import { Title } from './styled';
import styled from 'styled-components';

export default function CompletedPayment() {
  return (
    <>
      <Title>Pagamento</Title>
      <FinishedContainer>
        <Icon />
        <div>
          <h1>Pagamento confirmado!</h1>
          <h2>Prossiga para escolha de hospedagem e atividades</h2>
        </div>
      </FinishedContainer>
    </>
  );
}

const FinishedContainer = styled.div`
  display: flex;
  font-family: 'Roboto', sans-serif;
  div {
    flex-direction: column;
  }
  h1 {
    color: #454545;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    text-align: left;
  }
  h2 {
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    text-align: left;
    color: #454545;
  }
`;

const Icon = styled(AiFillCheckCircle)`
  color: #36b853;
  height: 40px;
  width: 40px;
  margin-right: 15px;
`;
