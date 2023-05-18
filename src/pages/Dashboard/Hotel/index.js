import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { Title } from '../../../components/Paymentboard/styled';
import HotelCard from '../../../components/Hotels/HotelCard';
import useTicket from '../../../hooks/api/useTicket';
import HotelRooms from '../../../components/Hotels/HotelRooms';
import useHotels from '../../../hooks/api/useHotels';
import { useState } from 'react';
import ResumeHotel from '../../../components/Hotels/resumeHotel';
import useUserBooking from '../../../hooks/api/useUserBookings';
import { useEffect } from 'react';

export default function Hotel() {
  const { ticket } = useTicket();
  const { hotels, hotelsError } = useHotels();
  const [clickedHotel, setClickedHotel] = useState(0);
  const [stepBooking, setStepBooking] = useState(0);
  const { bookingUser, getBookingUser } = useUserBooking();

  if (hotelsError) {
    return <p>Something went wrong, please, try again.</p>;
  }

  if (!ticket) {
    return (
      <>
        <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
        <MessageWhenTicketIsNotPaid>
          Você precisa ter confirmado pagamento antes
          <br />
          de fazer a escolha de hospedagem
        </MessageWhenTicketIsNotPaid>
      </>
    );
  }

  console.log(ticket.TicketType);

  // useEffect(() => {
  //   if (bookingUser) {
  //     setStepBooking(1);
  //   }
  // }, [bookingUser?.id]);

  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      {ticket.TicketType.includesHotel === false && (
        <MessageWhenTicketIsRemote>
          Sua modalidade de ingresso não inclui hospedagem
          <br />
          Prossiga para a escolha de atividades
        </MessageWhenTicketIsRemote>
      )}
      {ticket.status === 'RESERVED' && ticket.TicketType.includesHotel === true && (
        <MessageWhenTicketIsNotPaid>
          Você precisa ter confirmado pagamento antes
          <br />
          de fazer a escolha de hospedagem
        </MessageWhenTicketIsNotPaid>
      )}
      {ticket.status === 'PAID' && ticket.TicketType.includesHotel === true && (
        <>
          {stepBooking === 0 && (
            <>
              <Title>Primeiro, escolha seu hotel</Title>
              <HotelsCardsContainer>
                {hotels?.map((i) => (
                  <HotelCard
                    key={i.id}
                    id={i.id}
                    name={i.name}
                    image={i.image}
                    setClickedHotel={setClickedHotel}
                    clickedHotel={clickedHotel}
                  />
                ))}
              </HotelsCardsContainer>
              {}
              <HotelRooms
                clickedHotel={clickedHotel}
                setStepBooking={setStepBooking}
                getBookingUser={getBookingUser}
                bookingUser={bookingUser}
              />
            </>
          )}
          {stepBooking === 1 && (
            <>
              <ResumeHotel bookingUser={bookingUser} setStepBooking={setStepBooking} />
            </>
          )}
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
