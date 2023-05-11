import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import styled from 'styled-components';
import { Title } from './styled';
import Button from '../Form/Button';

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

  isFormValid = () => {
    const { cvc, expiry, name, number } = this.state;
    return cvc && expiry && name && number;
  };

  render() {
    const { nextStep } = this.props;
    const isFormValid = this.isFormValid();
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
                  required
                />
                <ExCardNumber>E.g.: 49...,51...,36...,37...</ExCardNumber>
              </div>

              <Input
                type="text"
                name="name"
                placeholder="Name"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                required
              />
              <ExpiryContainer>
                <ExpiryInput
                  type="tel"
                  name="expiry"
                  placeholder="Valid Thru"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                  required
                />
                <CvcInput
                  type="tel"
                  name="cvc"
                  placeholder="CVC"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                  required
                />
              </ExpiryContainer>
            </Form>
          </FormContainer>
        </Container>
        <Button type="submit" onClick={nextStep} disabled={!isFormValid}>
          finalizar pagamento
        </Button>
      </>
    );
  }
}

const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: flex-start;
  margin-bottom: 30px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardContainer = styled.div`
  margin-left: 0;
  max-width: 400px;
  margin-right: 30px;
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
  width: 180px;
`;

const CvcInput = styled(Input)`
  width: 100px;
`;
