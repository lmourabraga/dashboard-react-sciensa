import React from 'react';

import { Container, Saldo, ResumoPeriodo } from './styles';

interface CardProps {
  flag: string;
  titulo: string;
  valor: string;
  mes: string;
  ano: string;
  periodoAnterior: string;
}

const Card: React.FC<CardProps> = ({
  flag,
  titulo,
  valor,
  mes,
  ano,
  periodoAnterior,
}) => (
  <Container>
    <Saldo>
      <span className={flag}>{titulo}</span>
      <p>
        <span>R$</span>
        {valor}
      </p>
    </Saldo>

    <ResumoPeriodo>
      <div>
        <p>Mês</p>
        <p>{mes}</p>
      </div>

      <div>
        <p>Ano</p>
        <p>{ano}</p>
      </div>

      <div>
        <p>12 meses</p>
        <p>{periodoAnterior}</p>
      </div>
    </ResumoPeriodo>
  </Container>
);

export default Card;
