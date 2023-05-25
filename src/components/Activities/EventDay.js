import styled from 'styled-components';
import { Title } from '../Paymentboard/styled';

export default function EventDay({ dates }) {
  return (
    <>
      <Title>Primeiro, filtre pelo dia do evento: </Title>
      <Days>
        {dates.map((date) => {
          return (
            <>
              <ButtonDay>{date}</ButtonDay>
            </>
          );
        })}
      </Days>
    </>
  );
}

const ButtonDay = styled.button`
  width: 140px;
  height: 37px;
  margin-right: 17px;
  margin-top: 17px;
  background: #e0e0e0;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: none;
  font-size: 14px;
  font-family: 'Roboto';
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Days = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
