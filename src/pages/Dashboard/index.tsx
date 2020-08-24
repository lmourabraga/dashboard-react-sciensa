import React from 'react';

import Sidebar from '../../components/Sidebar';
import Carteira from '../Carteira';

import { Container } from './styles';

const Dash: React.FC = () => (
  <Container>
    <Sidebar />
    <Carteira />
  </Container>
);

export default Dash;
