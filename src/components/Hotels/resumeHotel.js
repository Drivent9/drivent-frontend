import { Title } from '../Paymentboard/styled';

export default function ResumeHotel({ bookingUser }) {
  if (!bookingUser) {
    return <></>;
  }

  return (
    <>
      <Title>Você já escolheu seu quarto:</Title>
      <p>{bookingUser.Room.id} Apenas um teste que esta chegando :p</p>
    </>
  );
}
