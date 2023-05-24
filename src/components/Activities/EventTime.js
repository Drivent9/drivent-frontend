import styled from 'styled-components';
import { Title } from '../Paymentboard/styled';

export default function EventTime() {
  return (
    <Container>
      <AuditoriumContainer>
        <Title>Auditório do banco </Title>
        <TimeContainer>
          <HourActivities>
            <h1>Minecraft: montando o PC ideal</h1>
            <h2>09:00 - 10:00</h2>
          </HourActivities>
        </TimeContainer>
      </AuditoriumContainer>
      <AuditoriumContainer>
        <Title>Auditório do banco</Title>
        <TimeContainer></TimeContainer>
      </AuditoriumContainer>
      <AuditoriumContainer>
        <Title>Auditório do banco</Title>
        <TimeContainer></TimeContainer>
      </AuditoriumContainer>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 60px;
  display: flex;
`;

const AuditoriumContainer = styled.div`
  width: 280px;
  height: 424px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TimeContainer = styled.div`
  width: 280px;
  height: 390px;
  border: 1px solid #cecece;
  padding: 10px;
`;

const HourActivities = styled.div`
  width: 260px;
  height: 80px;
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 10px;
  h1 {
    color: #343434;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    margin-bottom: 6px;
  }
  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
  }
`;
