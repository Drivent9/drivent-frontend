import styled from 'styled-components';

export default function HotelCard() {
  return (<>
    <HotelCardStyled>
      <img src='https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg' alt='hotelpicture'/>
      <h1>Driven Resort</h1>
      <p><strong>Tipos de acomodação</strong><br/>Single e Double</p>
      <p><strong>Vagas disponíveis:</strong><br/>103</p>
    </HotelCardStyled>
  </>);
}

const HotelCardStyled = styled.div`
    display:flex;
    flex-direction:column;
    background: #EBEBEB;
    border-radius: 10px;
    padding:14px;
    height:264px;
    margin-right:20px;
    margin-bottom:5px;
  > p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #3C3C3C;
    margin-bottom:5px;
  }

  > h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #343434;
    margin-block:10px;
  }

  > strong {
    font-weight: 700;
  }
  > img {
    width: 168px;
    height: 109px;
    object-fit:cover;
    border-radius: 5px;
    margin-inline:auto;
  }
`;
