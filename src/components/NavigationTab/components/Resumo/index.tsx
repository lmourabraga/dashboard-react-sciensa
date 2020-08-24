import React from 'react';

import { connect } from 'react-redux';
import { ApplicationState } from '../../../../store';

import Card from '../../../Card';
import PieChart from '../../../Charts/PieChart';
import LineChart from '../../../Charts/LineChart';
import Rentabilidade from '../../../Rentabilidade';

import { Container, StyledSubContainer } from './styles';

import { Cards } from '../../../../store/ducks/cards/types';

interface StateProps {
  cards: Cards[];
}

type Props = StateProps;

const Resumo: React.FC<Props> = ({ cards }: Props) => (
  <Container>
    <StyledSubContainer>
      <PieChart />

      <div className="fillSpace">
        <Rentabilidade />
        <LineChart />
      </div>
    </StyledSubContainer>

    <StyledSubContainer>
      {cards.map(card => (
        <Card
          key={card.flag}
          flag={card.flag}
          titulo={card.titulo}
          valor={card.valor}
          mes={card.mes}
          ano={card.ano}
          periodoAnterior={card.periodoAnterior}
        />
      ))}
    </StyledSubContainer>
  </Container>
);

const mapStateToProps = (state: ApplicationState) => ({
  cards: state.cards.data,
});

export default connect(mapStateToProps)(Resumo);
