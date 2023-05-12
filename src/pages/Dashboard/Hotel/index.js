import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { useContext } from 'react';
import UserContext from '../../../contexts/UserContext';
import { getTickets } from '../../../services/ticketApi';
import { useEffect, useState } from 'react';
import { Title } from '../../../components/Paymentboard/styled';
import HotelCard from '../../../components/Hotels/HotelCard';
import { getHotels } from '../../../services/hotelApi';
export default function Hotel() {
  const { userData } = useContext(UserContext);
  const [tickets, setTickets] = useState([{}]);
  const [error, setError] = useState(null);
  // const [hotels, setHotels] = useState(null);

  async function getTicket() {
    try {
      const response = await getTickets(userData.token);
      setTickets(response.data);
    } catch (err) {
      console.log(err);
      setError('Something went wrong. Please, try again.');
    }
  }

  // async function getHotel() {
  //   try {
  //     const response = await getHotels(userData.token);
  //     setHotels(response.data);
  //   } catch (err) {
  //     console.log(err);
  //     setError('Something went wrong. Please, try again.');
  //   }
  // }

  useEffect(() => {
    getTicket();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  // if (1) {
  //   return (
  //     <>
  //       <Title>Primeiro, escolha seu hotel</Title>
  //       <HotelsCardsContainer>
  //         <HotelCard />
  //         <HotelCard />
  //         <HotelCard />
  //       </HotelsCardsContainer>
  //     </>
  //   );
  // }

  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      {tickets.TicketType?.isRemote === true && (
        <MessageWhenTicketIsRemote>
          Sua modalidade de ingresso não inclui hospedagem
          <br />
          Prossiga para a escolha de atividades
        </MessageWhenTicketIsRemote>
      )}
      {tickets.status === 'RESERVED' && (
        <MessageWhenTicketIsNotPaid>
          Você precisa ter confirmado pagamento antes
          <br />
          de fazer a escolha de hospedagem
        </MessageWhenTicketIsNotPaid>
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
