import styled from 'styled-components';
import { Title } from '../Paymentboard/styled';

export default function EventTime() {
  return (
    <Container>
      <AuditoriumContainer>
        <Title>Auditório Principal</Title>
        <TimeContainer></TimeContainer>
      </AuditoriumContainer>
      <AuditoriumContainer>
        <Title>Auditório Principal</Title>
        <TimeContainer></TimeContainer>
      </AuditoriumContainer>
      <AuditoriumContainer>
        <Title>Auditório Principal</Title>
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
`;
