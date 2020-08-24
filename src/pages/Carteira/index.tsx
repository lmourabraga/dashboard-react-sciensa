import React from 'react';

import Header from '../../components/Header';
import Saldo from '../../components/Saldo';
import NavigationTab from '../../components/NavigationTab';

import { Container, SubContainer } from './styles';

const Carteira: React.FC = () => {
  const dadosFinanceiros = [
    {
      id: 1,
      titulo: 'Saldo em conta corrente',
      valor: '5.620.080,85',
    },
    {
      id: 2,
      titulo: 'Disponível para investir',
      valor: '10.000.000,00',
    },
    {
      id: 3,
      titulo: 'Patrimônio total:',
      valor: '10.000.000,00',
    },
  ];

  return (
    <Container>
      <Header />

      <SubContainer>
        {dadosFinanceiros.map(resumo => (
          <Saldo key={resumo.id} titulo={resumo.titulo} valor={resumo.valor} />
        ))}
      </SubContainer>
      <NavigationTab />
    </Container>
  );
};

export default Carteira;
