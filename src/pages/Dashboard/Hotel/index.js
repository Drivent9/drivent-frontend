import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import { Title } from '../../../components/Paymentboard/styled';
import HotelCard from '../../../components/Hotels/HotelCard';
import useTicket from '../../../hooks/api/useTicket';
import HotelRooms from '../../../components/Hotels/HotelRooms';
import useHotels from '../../../hooks/api/userHotels';

export default function Hotel() {
  const [error, setError] = useState(null);
  // const [hotels, setHotels] = useState(null);
  const { ticket } = useTicket();

  const { hotels } = useHotels(); //faz o mesmo que o a função getHotel abaixo so que simplificado
  console.log(hotels); //console para testes

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      {ticket?.TicketType.isRemote === true && (
        <MessageWhenTicketIsRemote>
          Sua modalidade de ingresso não inclui hospedagem
          <br />
          Prossiga para a escolha de atividades
        </MessageWhenTicketIsRemote>
      )}
      {ticket?.status === 'RESERVED' ||
        (ticket === null && (
          <MessageWhenTicketIsNotPaid>
            Você precisa ter confirmado pagamento antes
            <br />
            de fazer a escolha de hospedagem
          </MessageWhenTicketIsNotPaid>
        ))}
      {ticket?.status === 'PAID' && (
        <>
          <Title>Primeiro, escolha seu hotel</Title>
          <HotelsCardsContainer>
            {hotels?.map((i) => <HotelCard key={i.id} id={i.id} name={i.name} image={i.image}/>)}
          </HotelsCardsContainer>

          <HotelRooms />
        </>
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

const HotelsCardsContainer = styled.div`
  width: 100%;
  overflow-x: scroll;
  display: flex;
  scrollbar-width: thin;
  scrollbar-color: #dcdcdc #f5f5f5;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #dcdcdc;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: #ffffff;
  }
`;
