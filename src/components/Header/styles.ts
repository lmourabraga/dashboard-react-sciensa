import styled from 'styled-components';

import { Badge, Avatar } from '@material-ui/core';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  background-color: #fff;
  -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);

  form {
    display: flex;
    justify-content: space-between;
    margin-left: 40px;
    background-color: #fcfcfc;
    padding: 5px;
    border-radius: 20px;
    width: 100%;
    max-width: 400px;

    input,
    button {
      border: none;
      background: none;
    }

    input {
      margin-left: 20px;
      color: #5c5b5b;
      width: 100%;
    }

    button {
      margin-right: 5px;
      padding-right: 5px;
      width: 30px;

      svg {
        color: #203391;
        border-radius: 30px;
        font-size: 1.2rem;
        padding: 3px;
        transition: 0.2s;

        &:hover {
          background-color: #203391;
          color: #fff;
        }
      }
    }
  }

  div.acoes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 520px;

    button:first-child {
      width: 210px;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  border: 1px solid #f2f2f2;
  padding: 5px 15px;
  background-color: #fff;
  -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);
  transition: 0.2s;

  &:hover {
    background-color: #203391;

    span {
      color: #fff;
    }

    svg {
      background-color: #fff;
      color: #203391;
    }
  }

  span {
    text-transform: uppercase;
    margin-right: 20px;
    font-size: 14px;
    color: #5c5b5b;
  }

  svg {
    background-color: #aeaeae;
    padding: 5px;
    color: #fff;
    font-size: 14px;
    border-radius: 40px;
  }
`;

export const StyledBadge = styled(Badge)`
  padding: 0;
  color: #334ee5;

  svg {
    font-size: 1.5rem;
  }

  span {
    height: 12px;
    min-width: 12px;
    font-size: 0.45rem;
    padding: 0;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const UserData = styled.div`
  p {
    font-weight: bold;
    font-size: 14px;
    & + p {
      font-weight: normal;
      font-size: 12px;
    }
  }
`;

export const StyledAvatar = styled(Avatar)`
  background: #203391 !important;
  font-size: 0.8rem !important;
  width: 30px !important;
  height: 30px !important;
  margin-right: 10px;
`;

export const LogOut = styled.button`
  padding: 10px 20px 10px 15px;
  border-radius: 30px 0 0 30px;
  border: none;
  color: #fff;
  background-color: #27349c;
  transition: 0.2s;

  &:hover {
    background: #132168;
  }
`;
