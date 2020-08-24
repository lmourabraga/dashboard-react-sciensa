import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 5px;
  margin: 0 10px;
  padding: 15px 30px;
  -webkit-box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
`;

export const Titulo = styled.div`
  margin-bottom: 50px;

  p {
    color: #939393;
    font-weight: 700;
  }
`;

export const Resumo = styled.div`
  position: absolute;
  margin: 120px 140px;
  text-align: center;

  p:nth-child(1) {
    font-size: 18px;
    color: #000;
    font-weight: 700;
  }

  p:nth-child(2) {
    font-size: 12px;
    text-transform: uppercase;
    margin: 10px 0;
  }

  p:nth-child(3) {
    font-size: 12px;
    border-top: 1px solid #c3c3c3;
    padding-top: 10px;
  }
`;
