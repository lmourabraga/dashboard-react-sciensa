import styled, { css } from 'styled-components';

interface PorcentagemProps {
  type: 'positivo' | 'negativo';
}

const typeVariations = {
  positivo: css`
    color: #23c941;
  `,
  negativo: css`
    color: #d4141f;
  `,
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 370px;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 20px;
  -webkit-box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
`;

export const Titulo = styled.div`
  width: 100px;
  color: #939393;
  p {
    font-weight: 700;

    & + p {
      font-weight: 300;
      font-size: 12px;
      margin-top: 5px;
    }
`;

export const Variacao = styled.div`
  margin-left: 30px;
  color: #000;

  p {
    font-weight: 500;
  }
`;

export const Porcentagem = styled.p<PorcentagemProps>`
  ${(props) => typeVariations[props.type]}
`;
