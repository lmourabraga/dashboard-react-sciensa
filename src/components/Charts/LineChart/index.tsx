import React, { useState } from 'react';

import { Line } from 'react-chartjs-2';

import {
 Container, Titulo, VariacaoPeriodo, Button
} from './styles';

const LineChart: React.FC = () => {
  const [lineData, setLineData] = useState({
    labels: [
      'jan',
      'fev',
      'mar',
      'abr',
      'mai',
      'jun',
      'jul',
      'ago',
      'set',
      'out',
      'nov',
      'dez',
    ],
    datasets: [
      {
        label: 'CDI',
        fill: false,
        lineTension: 0,
        borderCapStyle: 'butt',
        pointBorderColor: 'rgba(11, 22, 76)',
        pointBackgroundColor: 'rgba(11, 22, 76)',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(11, 22, 76)',
        pointHoverBorderColor: 'rgba(11, 22, 76)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [1, 2, 3, 2, 5, 4, 6, 5, 5, 5, 6, 6],
        borderColor: ['rgba(11, 22, 76)'],
      },
      {
        label: 'Poupança',
        fill: false,
        lineTension: 0,
        borderCapStyle: 'butt',
        pointBorderColor: 'rgba(4, 152, 250)',
        pointBackgroundColor: 'rgba(4, 152, 250)',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(4, 152, 250)',
        pointHoverBorderColor: 'rgba(4, 152, 250)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [3, 1, 2, 3, 4, 7, 5, 4, 4, 2, 3, 2],
        borderColor: ['rgba(4, 152, 250)'],
      },
      {
        label: 'IBOV',
        fill: false,
        lineTension: 0,
        borderCapStyle: 'butt',
        pointBorderColor: 'rgba(51, 77, 222)',
        pointBackgroundColor: 'rgba(51, 77, 222)',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(51, 77, 222)',
        pointHoverBorderColor: 'rgba(51, 77, 222)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [1, 2, 3, 4, 4, 5, 2, 2, 3, 1, 1, 1],
        borderColor: ['rgba(51, 77, 222)'],
      },
      {
        label: 'IPCA',
        fill: false,
        lineTension: 0,
        borderCapStyle: 'butt',
        pointBorderColor: 'rgba(5, 220, 248)',
        pointBackgroundColor: 'rgba(5, 220, 248)',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(5, 220, 248)',
        pointHoverBorderColor: 'rgba(5, 220, 248)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [4, 3, 1, 2, 6, 3, 7, 1, 2, 4, 4, 5],
        borderColor: ['rgba(5, 220, 248)'],
      },
    ],
  });

  return (
    <Container>
      <Titulo>
        <p>Gráfico de Rendabilidade</p>
        <p>Versão Beta</p>
      </Titulo>

      <VariacaoPeriodo>
        <Button>no ano</Button>
        <Button>no mês</Button>
        <Button>desde o início*</Button>
      </VariacaoPeriodo>

      <Line
        data={lineData}
        height={90}
        options={{
          title: {
            display: true,
            text: 'Carteira',
            fontSize: 18,
            fontColor: '#344ce2',
          },
          legend: {
            display: true,
            position: 'bottom',
          },
        }}
      />
    </Container>
  );
};

export default LineChart;
