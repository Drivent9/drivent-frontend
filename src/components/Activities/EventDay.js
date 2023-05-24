import styled from 'styled-components';
import Button from '../Form/Button';
import { Title } from '../Paymentboard/styled';

export default function EventDay() {
  return (
    <>
      <Title>Primeiro, filtre pelo dia do evento: </Title>
      <ButtonDay>data do banco</ButtonDay>
      <ButtonDay>data do banco</ButtonDay>
      <ButtonDay>data do banco</ButtonDay>
    </>
  );
}

const ButtonDay = styled(Button)`
  margin-right: 17px !important;
`;
