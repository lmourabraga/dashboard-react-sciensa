import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  box-sizing: border-border-box;
  outline: 0;
}

body{
  background: #fff;
  color: #5c5b5b;
  -webkit-font-smoothing: antialised;
}

body, input, button{
  font-family: 'Roboto', serif;
  font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong{
font-weight: 600;
}

button{
  cursor: pointer;
}
`;
