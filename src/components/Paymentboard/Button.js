import MuiButton from '@material-ui/core/Button';
import styled from 'styled-components';

export default function Button({ variant = 'contained', children, ...props }) {
  return <StyledMuiButton variant={variant}>FINALIZAR PAGAMENTO</StyledMuiButton>;
}

const StyledMuiButton = styled(MuiButton)`
  margin-bottom: 30px !important;
  margin-top: 8px !important;
`;

// este modelo de botão é o mesmo do forms, definir a props e o childem deveria ser o finalizar pagamento,
// por so um layout estatico
//se ele é um componente usado em mais de um lugar, deveria ter uma pasta proprio? ou ser realocado? para evitar repetição de codigo.
