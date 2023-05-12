import Button from '../Form/Button.js';
import { Title } from './styled.js';

export default function Resume({ setPaymentStep, amount, setDone }) {
  return (
    <>
      <Title>Fechado! O total ficou em R$ {amount}. Agora é só confirmar:</Title>
      <Button
        onClick={() => {
          setPaymentStep(3);
          setDone(false);
        }}
      >
        RESERVAR INGRESSO
      </Button>
    </>
  );
}
