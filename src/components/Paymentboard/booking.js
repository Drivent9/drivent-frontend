import styled from 'styled-components';
import Button from '../Form/Button';
import { Title } from './styled';

export default function Booking({ nextStep }) {
  return (
    <>
      <Title>Primeiro, escolha sua modalidade de ingresso</Title>
      <OptionsDiv>
        <ChoiseCard>
          <h1>Presencial</h1>
          <span>R$ 250</span>
        </ChoiseCard>
        <ChoiseCard>
          <h1>Online</h1>
          <span>R$ 100</span>
        </ChoiseCard>
      </OptionsDiv>

      <Title>Ótimo! Agora escolha sua modalidade de hospedagem</Title>

      <OptionsDiv>
        <ChoiseCard>
          <h1>Sem Hotel</h1>
          <span>+ R$ 0</span>
        </ChoiseCard>
        <ChoiseCard>
          <h1>Com Hotel</h1>
          <span>+ R$ 350</span>
        </ChoiseCard>
      </OptionsDiv>

      <Title>Fechado! O total ficou em R$ 000,00. Agora é só confirmar:</Title>
      <Button onClick={nextStep}>RESERVAR INGRESSO</Button>
    </>
  );
}

const OptionsDiv = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  gap: 25px;
  margin-bottom: 40px;
`;
const ChoiseCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 9.5rem;
  height: 9rem;
  padding: 3px;
  border: 1px solid #cecece;
  text-align: center;
  border-radius: 20px;
  :hover {
    background-color: #ffeed2;
  }

  h1 {
    font-size: 16px;
  }

  span {
    font-size: 14px;
    color: #898989;
  }
`;
