import React, { useState } from 'react';

import { IconButton } from '@material-ui/core';
import {
  VisibilityOffOutlined,
  VisibilityOutlined,
  NotificationsOutlined,
  PowerSettingsNewOutlined,
  SearchOutlined,
} from '@material-ui/icons';

import {
  Container,
  Button,
  StyledBadge,
  StyledAvatar,
  UserInfo,
  UserData,
  LogOut,
} from './styles';

const Header: React.FC = () => {
  const [visibility, setVisibility] = useState(true);

  return (
    <Container>
      <form>
        <input type="text" placeholder="O que você procura?" />

        <button type="button">
          <SearchOutlined />
        </button>
      </form>

      <div className="acoes">
        <Button type="button" onClick={() => setVisibility(!visibility)}>
          <span>{visibility ? 'Esconder valores' : 'Mostrar valores'}</span>
          {visibility ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
        </Button>

        <IconButton>
          <StyledBadge
            badgeContent={1}
            color="secondary"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
            <NotificationsOutlined />
          </StyledBadge>
        </IconButton>

        <UserInfo>
          <StyledAvatar>LB</StyledAvatar>
          <UserData>
            <p>Luã Braga</p>
            <p>CC 16289-9</p>
          </UserData>
        </UserInfo>

        <LogOut>
          <PowerSettingsNewOutlined />
        </LogOut>
      </div>
    </Container>
  );
};

export default Header;
