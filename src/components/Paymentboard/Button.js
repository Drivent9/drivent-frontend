import MuiButton from '@material-ui/core/Button';
import styled from 'styled-components';

export default function ButtonTest({ variant = 'contained', children, ...props }) {
  return <StyledMuiButton variant={variant}>FINALIZAR PAGAMENTO</StyledMuiButton>;
}

const StyledMuiButton = styled(MuiButton)`
  margin-bottom: 30px !important;
  margin-top: 8px !important;
`;

// este modelo de botão é o mesmo do forms
//definir a props, o children deveria ser "finalizar pagamento"
//se ele é um componente usado em mais de um lugar, deveria ter uma pasta propria? ou ser realocado? para evitar repetição de codigo?
