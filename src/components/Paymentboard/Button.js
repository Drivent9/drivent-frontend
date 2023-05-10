import MuiButton from '@material-ui/core/Button';
import styled from 'styled-components';

export default function ButtonTest({ variant = 'contained', children, ...props }) {
  return <StyledMuiButton variant={variant}>FINALIZAR PAGAMENTO</StyledMuiButton>;
}

const StyledMuiButton = styled(MuiButton)`
  margin-bottom: 30px !important;
  margin-top: 8px !important;
`;

// APENAS PARA TESTES. O BOTÃO ESTA FEITO NO FORMS
//definir a props e children para o botão original, entender o codigo do botão.
