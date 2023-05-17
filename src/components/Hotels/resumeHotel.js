import Button from '../Form/Button';
import { Title } from '../Paymentboard/styled';

export default function ResumeHotel({ bookingUser }) {
  if (!bookingUser) {
    return <></>;
  }

  return (
    <>
      <Title>Você já escolheu seu quarto:</Title>
      <p>{bookingUser.Room.id} (teste para ver o Room Id)</p>
      <Button>TROCAR DE QUARTO</Button>
    </>
  );
}
