import Button from '../Form/Button';
import { Title } from './styled';

export default function Booking({ nextStep }) {
  return (
    <>
      <Title>Primeiro, escolha sua modalidade de ingresso</Title>
      <Title>Ótimo! Agora escolha sua modalidade de hospedagem</Title>
      <Title>Fechado! O total ficou em R$ 000,00. Agora é só confirmar:</Title>
      <Button onClick={nextStep}>RESERVAR INGRESSO</Button>
    </>
  );
}
