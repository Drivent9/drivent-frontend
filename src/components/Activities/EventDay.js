import styled from 'styled-components';
import { useState } from 'react';
import { Title } from '../Paymentboard/styled';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function EventDay({ setClickedDate, activities }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setClickedDate(date);
    setSelectedDate(date);
  };

  if (!activities) return <></>;

  const uniqueDates = activities.reduce((unique, activity) => {
    const startsAtDate = activity.startsAt.split('T')[0];
    const parsedDate = parseISO(startsAtDate);
    const formattedDate = format(parsedDate, 'EEE, dd/MM', { locale: ptBR });
    if (!unique.includes(formattedDate)) {
      unique.push(formattedDate);
    }
    return unique;
  }, []);

  return (
    <>
      <Title>Primeiro, filtre pelo dia do evento:</Title>
      <Days>
        {uniqueDates.map((date) => {
          const isDateSelected = selectedDate === date;
          return (
            <ButtonDay key={date} onClick={() => handleDateClick(date)} selected={isDateSelected}>
              {date}
            </ButtonDay>
          );
        })}
      </Days>
    </>
  );
}

const ButtonDay = styled.button`
  width: 140px;
  height: 37px;
  margin-right: 17px;
  margin-top: 17px;
  background: ${(props) => (props.selected ? '#FFD37D' : '#e0e0e0')};
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: none;
  font-size: 14px;
  font-family: 'Roboto';
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffd37d;
  }
`;

const Days = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
