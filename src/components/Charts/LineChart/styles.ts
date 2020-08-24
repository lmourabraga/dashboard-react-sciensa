import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  -webkit-box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
`;

export const Titulo = styled.div`
  display: flex;
  align-items: center;
  color: #939393;
  p {
    font-weight: 700;

    & + p {
      font-weight: 300;
      margin-left: 10px;
      font-size: 12px;
    }
  }
`;

export const VariacaoPeriodo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const Button = styled.button`
  border: none;
  background: none;
  border-radius: 20px;
  padding: 5px 10px;
  font-size: 12px;
  -webkit-box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  transition: 0.2s;

  & + button {
    margin-left: 20px;
  }

  &:hover,
  &:last-child {
    color: #fff;
    background-color: #3149cd;
  }
`;
