import styled from 'styled-components';

import { List } from '@material-ui/core/';

export const Container = styled.div`
  max-width: 180px;
  width: 100%;
  background-color: #0d093b;

  > svg {
    color: #009dfe;
  }
`;

export const Nav = styled(List)`
  .MuiListItemIcon-root {
    min-width: 40px;

    svg {
      color: #009dfe;
    }
  }

  .MuiListItem-root.Mui-selected,
  .MuiListItem-root.Mui-selected:hover {
    background-color: #132168;
    color: #fff;
  }
`;

export const Logo = styled.div`
  padding: 30px;
  text-align: center;
`;
