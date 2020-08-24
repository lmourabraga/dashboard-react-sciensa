import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  height: 100vh;

  .MuiAppBar-colorPrimary {
    background-color: #3449d6;
  }
  .MuiTab-wrapper {
    text-transform: none;
  }
  .MuiTabs-flexContainer {
    margin: 0 40px;
  }
  .MuiTab-root {
    min-width: unset;
    padding: 0;
    & + .MuiTab-root {
      margin-left: 40px;
    }
  }
  .MuiTab-root:last-child {
    margin-left: auto;
  }

  .PrivateTabIndicator-root-1 {
    margin-bottom: 12px;
  }
  .PrivateTabIndicator-colorSecondary-3 {
    background-color: #fff;
    background: linear-gradient(to right, #fff 50%, transparent 50%);
  }
`;
