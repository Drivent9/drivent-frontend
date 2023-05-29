import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import EventDay from './EventDay';
import EventTime from './EventTime';
import { useEffect, useState } from 'react';
import { getEventInfo } from '../../services/eventApi';
import { eachDayOfInterval, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function ActiviesIndexComponents() {
  const [dates, setDates] = useState([]);
  const [error, setError] = useState('');
  const [clickedDate, setClickedDate] = useState();

  async function getDays() {
    try {
      const response = await getEventInfo();
      const { startsAt, endsAt } = response;

      const startDate = new Date(startsAt);
      const endDate = new Date(endsAt);

      const days = eachDayOfInterval({ start: startDate, end: endDate });
      const formattedDays = days.map((day) => format(day, 'EEE, dd/MM', { locale: ptBR }));

      setDates(formattedDays);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    getDays();
  }, []);

  if (error) {
    return <p>Something went wrong. Please, try again.</p>;
  }
  return (
    <>
      <StyledTypography variant="h4">Escolha de atividades</StyledTypography>

      <EventDay dates={dates} setClickedDate={setClickedDate} />

      <EventTime clickedDate={clickedDate}></EventTime>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
