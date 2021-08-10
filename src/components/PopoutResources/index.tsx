import React from 'react';
import { Container } from './styles';


export const PopoutResources: React.FC = ({ children }) => {
  return (
    <Container>
      {children}
      <div>
        <span>Disponíbilizado</span>
        <p>R$20.000,00 <span>do seu saldo</span></p>
        <br/>
        <span>Distribuído</span>
        <p>R$12.050,00 <span>(60,25%)</span></p>
        <button>ALTERAR</button>
      </div>
    </Container>
  );
};