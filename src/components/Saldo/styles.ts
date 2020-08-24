import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px 0 20px 40px;

  p {
    font-weight: bold;
    color: #000;

    span {
      margin-right: 5px;
    }

    & + p {
      margin-top: 5px;
      font-weight: 300;
      font-size: 26px;
    }
  }

  & + div {
    margin-left: 30px;
  }
`;
