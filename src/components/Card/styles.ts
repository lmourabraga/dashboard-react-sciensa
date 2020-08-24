import styled from 'styled-components';

export const Container = styled.div`
  width: 20%;
  border-radius: 5px;
  background-color: #fff;
  margin: 20px 10px;
  padding: 15px 30px;
  -webkit-box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
`;

export const Saldo = styled.div`
  > span {
    padding: 5px 10px;
    border-radius: 40px;
    color: #fff;
    text-transform: uppercase;
    width: auto;
    font-size: 0.6rem;
    font-weight: 700;
  }

  > span.one {
    background-color: #009eff;
  }

  > span.two {
    background: #3554ff;
  }

  > span.three {
    background: #14dafd;
  }

  > span.four {
    background: #98b0c8;
  }

  > span.five {
    background: #0b1133;
  }

  p {
    color: #000;
    font-size: 1.5rem;
    font-weight: 300;
    margin-top: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(242, 242, 242);

    span {
      margin-right: 5px;
    }
  }
`;

export const ResumoPeriodo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;

  div {
    p {
      font-size: 0.7rem;

      & + p {
        margin-top: 5px;
        font-size: 1rem;
        font-weight: 700;
        color: #23c941;
      }
    }
  }
`;
