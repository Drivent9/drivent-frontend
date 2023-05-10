import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import styled from 'styled-components';
import { Title } from './styled';

export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <Title>Pagamento</Title>
        <Container id="PaymentForm">
          <CardContainer>
            <Cards
              cvc={this.state.cvc}
              expiry={this.state.expiry}
              focused={this.state.focus}
              name={this.state.name}
              number={this.state.number}
            />
          </CardContainer>

          <FormContainer>
            <Form>
              <div>
                <Input
                  type="tel"
                  name="number"
                  placeholder="Card Number"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
                <ExCardNumber>E.g.: 49...,51...,36...,37...</ExCardNumber>
              </div>

              <Input
                type="text"
                name="name"
                placeholder="Name"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <ExpiryContainer>
                <ExpiryInput
                  type="tel"
                  name="expiry"
                  placeholder="Valid Thru"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
                <CvcInput
                  type="tel"
                  name="cvc"
                  placeholder="CVC"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </ExpiryContainer>
            </Form>
          </FormContainer>
        </Container>
      </>
    );
  }
}

const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: flex-start;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardContainer = styled.div`
  margin-left: 0;
  max-width: 400px;
  margin-right: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 180px;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  ::placeholder {
    font-family: 'Roboto', sans-serif;
    color: #8e8e8e;
    font-size: 18px;
  }
`;

const ExCardNumber = styled.h1`
  width: 300px;
  display: flex;
  font-family: 'Roboto', sans-serif;
  color: #8e8e8e;
  margin-top: 5px;
`;

const ExpiryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`;

const ExpiryInput = styled(Input)`
  width: 120px;
`;

const CvcInput = styled(Input)`
  width: 80px;
`;
