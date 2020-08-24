import React from 'react';

import { Container, Titulo, Variacao, Porcentagem } from './styles';

const Rentabilidade: React.FC = () => (
  <Container>
    <Titulo>
      <p>Rentabilidade da Carteira</p>
      <p>Versão Beta</p>
    </Titulo>

    <Variacao>
      <p>no mês</p>
      <Porcentagem type="positivo">+0,50%</Porcentagem>
    </Variacao>

    <Variacao>
      <p>no ano</p>
      <Porcentagem type="negativo">-9,75%</Porcentagem>
    </Variacao>

    <Variacao>
      <p>12 meses</p>
      <Porcentagem type="negativo">-5,42%</Porcentagem>
    </Variacao>
  </Container>
);

export default Rentabilidade;
