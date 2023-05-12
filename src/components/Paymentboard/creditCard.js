import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import styled from 'styled-components';
import { Title } from './styled';
import Button from '../Form/Button';
import { toast } from 'react-toastify';
import useCreatePayment from '../../hooks/api/useCreatePayment';
import InputMask from 'react-input-mask';

function PaymentForm({ setPaymentStep, ticketId }) {
  const [cvc, setCvc] = useState('');
  const [expiry, setExpiry] = useState('');
  const [focus, setFocus] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [issuer, setIssuer] = useState('');
  const { createPayment } = useCreatePayment();

  const handleInputFocus = (e) => {
    setFocus(e.target.name);
  };

  async function postPayment() {
    const data = {
      ticketId,
      cardData: {
        issuer,
        number,
        name,
        expirationDate: expiry,
        cvv: cvc,
      },
    };

    console.log(data);

    try {
      await createPayment(data);
      toast('Pagamento realizado com sucesso!');
      setPaymentStep(4);
    } catch (err) {
      toast('Não foi possível realizar o pagamento!');
      console.log(err);
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'cvc') {
      setCvc(value);
    } else if (name === 'expiry') {
      setExpiry(value);
    } else if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const isFormValid = () => {
    return cvc.length && expiry && name && number;
  };

  const handleCardTypeChange = (cardType) => {
    setIssuer(cardType.issuer);
  };

  return (
    <>
      <Title>Pagamento</Title>
      <Container id="PaymentForm">
        <CardContainer>
          <Cards
            cvc={cvc}
            expiry={expiry}
            focused={focus}
            name={name}
            number={number}
            callback={handleCardTypeChange}
          />
        </CardContainer>

        <FormContainer>
          <Form>
            <div>
              <Input
                type="tel"
                name="number"
                placeholder="Card Number"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                mask="9999 9999 9999 9999"
                required
              />
              <ExCardNumber>E.g.: 49...,51...,36...,37...</ExCardNumber>
            </div>

            <Input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
            />
            <ExpiryContainer>
              <ExpiryInput
                type="tel"
                name="expiry"
                placeholder="Valid Thru"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required
                mask="99/99"
              />
              <CvcInput
                type="tel"
                name="cvc"
                placeholder="CVC"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required
              />
            </ExpiryContainer>
          </Form>
        </FormContainer>
      </Container>
      <Button type="submit" onClick={() => postPayment()} disabled={!isFormValid()}>
        finalizar pagamento
      </Button>
    </>
  );
}

export default PaymentForm;

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

const Input = styled(InputMask)`
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
