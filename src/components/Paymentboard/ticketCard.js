import { Title } from './styled.js';
import { useState } from 'react';
import styled from 'styled-components';

export default function TicketCard({ setPaymentStep, setTotal, setDone, setClickedType }) {
  const [clicked, setClicked] = useState(0);

  function handleClick(item, type) {
    setClicked(item);
    setTotal(item);
    setClickedType(type);
  }

  return (
    <>
      <Title>Primeiro, escolha sua modalidade de ingresso</Title>
      <OptionsDiv>
        <ChoiseCard
          clicked={clicked === 250}
          onClick={() => {
            handleClick(250, 'Presencial');
            setPaymentStep(6);
            setDone(false);
          }}
        >
          <h1>Presencial</h1>
          <span>R$ 250</span>
        </ChoiseCard>
        <ChoiseCard
          clicked={clicked === 100}
          onClick={() => {
            handleClick(100, 'Online');
            setPaymentStep(5);
            setDone(true);
          }}
        >
          <h1>Online</h1>
          <span>R$ 100</span>
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
