import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import { ListItemText } from '@material-ui/core/';

import {
  HomeOutlined,
  AccountBalanceWalletOutlined,
  TrendingUpOutlined,
  SaveAltOutlined,
  ReceiptOutlined,
  BorderColorOutlined,
  TrackChangesOutlined,
  EqualizerOutlined,
  LiveTvOutlined,
} from '@material-ui/icons/';

import logoImg from '../../assets/images/logo.png';

import { Container, Nav, Logo } from './styles';

const Sidebar: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="Genial Investimentos" width="100" />
      </Logo>
      <Nav>
        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={event => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <HomeOutlined />
          </ListItemIcon>
          <ListItemText primary="Início" />
        </ListItem>

        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={event => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <AccountBalanceWalletOutlined />
          </ListItemIcon>
          <ListItemText primary="Carteira" />
        </ListItem>

        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={event => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <TrendingUpOutlined />
          </ListItemIcon>
          <ListItemText primary="Investimentos" />
        </ListItem>

        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={event => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <SaveAltOutlined />
          </ListItemIcon>
          <ListItemText primary="Resgate" />
        </ListItem>

        <ListItem
          button
          selected={selectedIndex === 5}
          onClick={event => handleListItemClick(event, 5)}
        >
          <ListItemIcon>
            <ReceiptOutlined />
          </ListItemIcon>
          <ListItemText primary="Extrato" />
        </ListItem>

        <ListItem
          button
          selected={selectedIndex === 6}
          onClick={event => handleListItemClick(event, 6)}
        >
          <ListItemIcon>
            <BorderColorOutlined />
          </ListItemIcon>
          <ListItemText primary="Termos" />
        </ListItem>

        <ListItem
          button
          selected={selectedIndex === 7}
          onClick={event => handleListItemClick(event, 7)}
        >
          <ListItemIcon>
            <TrackChangesOutlined />
          </ListItemIcon>
          <ListItemText primary="Trader Cockpit" />
        </ListItem>

        <ListItem
          button
          selected={selectedIndex === 8}
          onClick={event => handleListItemClick(event, 8)}
        >
          <ListItemIcon>
            <EqualizerOutlined />
          </ListItemIcon>
          <ListItemText primary="Homebroker" />
        </ListItem>

        <ListItem
          button
          selected={selectedIndex === 9}
          onClick={event => handleListItemClick(event, 9)}
        >
          <ListItemIcon>
            <LiveTvOutlined />
          </ListItemIcon>
          <ListItemText primary="Sala ao Vivo" />
        </ListItem>
      </Nav>
    </Container>
  );
};

export default Sidebar;
