import styled from 'styled-components';
import { Title } from '../Paymentboard/styled';
import { BiLogIn, BiXCircle } from 'react-icons/bi';
import React from 'react';
import { format } from 'date-fns';

export default function EventTime({ clickedDate, activities }) {
  if (!activities || !clickedDate) {
    return <></>;
  }

  const activitiesByAuditorium = activities.reduce((acc, activity) => {
    const auditoriumId = activity.activityPlaceId;
    if (!acc[auditoriumId]) {
      acc[auditoriumId] = [];
    }
    acc[auditoriumId].push(activity);
    return acc;
  }, {});

  return (
    <Container>
      {Object.entries(activitiesByAuditorium).map(([auditoriumId, activities]) => (
        <AuditoriumContainer key={auditoriumId}>
          <Title>{activities[0].ActivityPlace.name}</Title>
          <TimeContainer>
            {activities.map((activity) => {
              const startsAt = new Date(activity.startsAt);
              const endsAt = new Date(activity.endsAt);
              const durationHours = Math.abs(endsAt - startsAt) / 36e5;
              const capacity = activity.capacity;
              const takenPositions = activity.ActivityBooking.length;
              const availablePositions = capacity - takenPositions;

              const activityDate = format(startsAt, 'dd/MM');
              const clickedDateStr = clickedDate.split(',')[1].trim();

              if (activityDate !== clickedDateStr) {
                return null;
              }

              return (
                <HourActivities key={activity.id} ActivityHeight={durationHours}>
                  <>
                    <TextDiv>
                      <h1>{activity.title}</h1>
                      <h2>
                        {startsAt.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}{' '}
                        -{' '}
                        {endsAt.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </h2>
                    </TextDiv>

                    <Bar></Bar>
                    {availablePositions ? (
                      <IconDiv isAvailable={availablePositions}>
                        <Icon></Icon>
                        <p>{availablePositions} vagas</p>
                      </IconDiv>
                    ) : (
                      <IconDiv isAvailable={availablePositions}>
                        <RedIcon></RedIcon>
                        <p>Esgotado</p>
                      </IconDiv>
                    )}
                  </>
                </HourActivities>
              );
            })}
          </TimeContainer>
        </AuditoriumContainer>
      ))}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 60px;
  display: flex;
`;

const AuditoriumContainer = styled.div`
  width: 280px;
  min-height: 424px;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TimeContainer = styled.div`
  width: 280px;
  min-height: 390px;
  height: auto;
  border: 1px solid #cecece;
  padding: 10px;
`;

const HourActivities = styled.div`
  width: 260px;
  height: ${(props) => props.ActivityHeight * 80}px;
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  cursor: default;
`;

const TextDiv = styled.div`
  h1 {
    color: #343434;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    margin-bottom: 6px;
    width: 171px;
    margin-right: 10px;
  }
  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
  }
`;

const Bar = styled.div`
  width: 1px;
  height: ${(props) => props.ActivityHeight * 60}px;
  background-color: #cfcfcf;
`;

const IconDiv = styled.div`
  width: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 9px;
    font-weight: 400;
    line-height: 11px;
    color: ${(props) => (props.isAvailable ? '#078632' : '#CC6666')};
  }
  cursor: ${(props) => (props.isAvailable ? 'pointer' : 'default')};
`;

const Icon = styled(BiLogIn)`
  font-size: 20px;
  color: #078632;
`;

const RedIcon = styled(BiXCircle)`
  font-size: 20px;
  color: #cc6666;
`;
