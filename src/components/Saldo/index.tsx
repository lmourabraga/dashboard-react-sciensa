import React from 'react';

import { Container } from './styles';

interface SaldoProps {
  titulo: string;
  valor: string;
}

const Saldo: React.FC<SaldoProps> = ({ titulo, valor }: SaldoProps) => (
  <Container>
    <p>{titulo}</p>
    <p>
      <span>R$</span>
      {valor}
    </p>
  </Container>
);

export default Saldo;
