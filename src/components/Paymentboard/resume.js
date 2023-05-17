import { toast } from 'react-toastify';
import useCreateTicket from '../../hooks/api/useCreateTicket.js';
import Button from '../Form/Button.js';
import { Title } from './styled.js';

export default function Resume({ setPaymentStep, total, setDone, selectedTicket }) {
  const { createTicket } = useCreateTicket();

  async function postTicket() {
    console.log(selectedTicket);

    try {
      await createTicket(selectedTicket);
      toast('Ticket registrado com sucesso');
      setPaymentStep(3);
      setDone(false);
    } catch (err) {
      toast('Não foi possível registrar o ticket!');
    }
  }

  return (
    <>
      <Title>Fechado! O total ficou em R$ {total}. Agora é só confirmar:</Title>
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
