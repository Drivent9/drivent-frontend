import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import EventDay from './EventDay';
import EventTime from './EventTime';
import { useState } from 'react';
import useActivities from '../../hooks/api/useActivities';

export default function ActiviesIndexComponents() {
  const { activities } = useActivities();
  const [clickedDate, setClickedDate] = useState();

  if (!activities) {
    return <p>Something went wrong. Please, try again.</p>;
  }
  return (
    <>
      <StyledTypography variant="h4">Escolha de atividades</StyledTypography>

      <EventDay setClickedDate={setClickedDate} activities={activities} />

      <EventTime activities={activities} clickedDate={clickedDate}></EventTime>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
