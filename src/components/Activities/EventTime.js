import styled from 'styled-components';
import { Title } from '../Paymentboard/styled';
import useActivities from '../../hooks/api/useActivities';
import { BiLogIn } from 'react-icons/bi';

export default function EventTime() {
  const { activities } = useActivities();
  console.log(activities);

  if (!activities) {
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
                    <IconDiv>
                      <Icon></Icon>
                      <p>{activity.capacity} vagas</p>
                    </IconDiv>
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
  height: ${(props) => props.ActivityHeight * 80}px;
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
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
    color: #078632;
  }
`;

const Icon = styled(BiLogIn)`
  font-size: 20px;
  color: #078632;
`;
