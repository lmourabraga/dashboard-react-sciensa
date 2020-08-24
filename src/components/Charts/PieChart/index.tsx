import React, { useState } from 'react';

import { connect } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import { ApplicationState } from '../../../store';

import { HideValues } from '../../../store/ducks/hideValues/types';

import { Container, Titulo, Resumo } from './styles';

interface StateProps {
  hideValues: HideValues;
}

type Props = StateProps;

const PieChart: React.FC<Props> = ({ hideValues }: Props) => {
  const [doughnutData, setDoughnutData] = useState({
    labels: [
      'Renda Fixa | 10% ativos',
      'Fundos | 30% ativos',
      'Previdência | 15% ativos',
      'Ações/Futuros | 25% ativos',
      'Tesouro | 20% ativos',
    ],
    datasets: [
      {
        data: [100, 300, 150, 250, 200],
        borderWidth: 1,
        backgroundColor: [
          '#3d54fa',
          '#36A2EB',
          '#141b4f',
          '#00def8',
          '#97b3cb',
        ],
        hoverBackgroundColor: [
          '#3d54fa',
          '#36A2EB',
          '#141b4f',
          '#00def8',
          '#97b3cb',
        ],
      },
    ],
  });

  return (
    <Container>
      <Titulo>
        <p>Minha carteira</p>
      </Titulo>

      <Resumo>
        <p>
          R$
          <span>{hideValues.status ? '102.232,10' : ' • • • • •'}</span>
        </p>
        <p>22 Ativos</p>
        <p>Valor Total Bruto</p>
      </Resumo>

      <Doughnut
        height={300}
        data={doughnutData}
        options={{
          legend: {
            display: true,
            position: 'bottom',
          },
        }}
      />
    </Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  hideValues: state.hideValues.data,
});

export default connect(mapStateToProps)(PieChart);
