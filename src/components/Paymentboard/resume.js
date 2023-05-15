import { toast } from 'react-toastify';
import useCreateTicket from '../../hooks/api/useCreateTicket.js';
import Button from '../Form/Button.js';
import { Title } from './styled.js';

export default function Resume({ setPaymentStep, amount, setDone, ticketTypeId }) {
  const { createTicket } = useCreateTicket();

  async function postTicket() {
    setPaymentStep(3);
    setDone(false);
  }

  // try {
  //   await createTicket(data);
  //   toast('Ticket registrado com sucesso');
  //   setPaymentStep(3);
  //   setDone(false);
  // } catch (err) {
  //   toast('Não foi possível registrar o ticket!');
  // }

  return (
    <>
      <Title>Fechado! O total ficou em R$ {amount}. Agora é só confirmar:</Title>
      <Button
        onClick={() => {
          postTicket();
        }}
      >
        RESERVAR INGRESSO
      </Button>
    </>
  );
}
