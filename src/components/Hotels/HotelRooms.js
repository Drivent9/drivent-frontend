import styled from 'styled-components';
import { Title } from '../Paymentboard/styled';
import { HiOutlineUser } from 'react-icons/hi';

export default function HotelRooms() {
  return (
    <Container>
      <Title>Ótima pedida! Agora escolha seu quarto:</Title>
      <RoomsContainer>
        <Rooms>
          <h1>101</h1>
          <IconContainer>
            <Icon />
            <FilledIcon />
          </IconContainer>
        </Rooms>
        <Rooms>
          <h1>101</h1>
          <IconContainer>
            <Icon />
            <FilledIcon />
          </IconContainer>
        </Rooms>
        <Rooms color={'#E9E9E9'}>
          <h1>101</h1>
          <IconContainer>
            <FilledIcon props={'#8C8C8C'} />
          </IconContainer>
        </Rooms>
      </RoomsContainer>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 40px;
`;

const RoomsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const Rooms = styled.div`
  border-radius: 10px;
  width: 190px;
  height: 45px;
  border: 1px solid #cecece;
  margin-right: 17px;
  margin-bottom: 8px;
  display: flex;
  background-color: ${(props) => props.color};
  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 23px;
    margin: 11px 0px 11px 16px;
    color: #454545;
  }
`;

const IconContainer = styled.div`
  margin: 11px 12px 11px auto;
`;

const Icon = styled(HiOutlineUser)`
  font-size: 22px;
`;

const FilledIcon = styled(HiOutlineUser)`
  fill: ${(props) => props.props || '#000'};
  color: ${(props) => props.props};
  font-size: 22px;
`;
