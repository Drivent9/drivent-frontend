import styled from 'styled-components';
import { useState } from 'react';
import { Title } from './styled';

export default function Booking({ setTotal, setDone }) {
  const [clicked, setClicked] = useState(false);

  function handleClick(amount) {
    setClicked(amount);
    setTotal(250 + amount);
    setDone(true);
  }

  return (
    <>
      <Title>Ótimo! Agora escolha sua modalidade de hospedagem</Title>
      <OptionsDiv>
        <ChoiseCard clicked={clicked === 0} onClick={() => handleClick(0, 'Sem Hotel')}>
          <h1>Sem Hotel</h1>
          <span>+ R$ 0</span>
        </ChoiseCard>
        <ChoiseCard clicked={clicked === 350} onClick={() => handleClick(350, 'Com Hotel')}>
          <h1>Com Hotel</h1>
          <span>+ R$ 350</span>
        </ChoiseCard>
      </OptionsDiv>
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
  background-color: ${(props) => (props.clicked ? '#ffeed2' : 'white')};
  :hover {
    background-color: #ffeed2;
  }
  cursor: pointer;

  h1 {
    font-size: 16px;
  }

  span {
    font-size: 14px;
    color: #898989;
  }
`;
