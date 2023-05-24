import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import EventDay from './EventDay';
import EventTime from './EventTime';

export default function ActiviesIndexComponents() {
  return (
    <>
      <StyledTypography variant="h4">Escolha de atividades</StyledTypography>

      <EventDay />

      <EventTime></EventTime>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
