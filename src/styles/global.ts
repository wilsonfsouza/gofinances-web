import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  :root {
    --bottom-line-color: #FF872C;
    --header-container-color: #5636D3;
    --green-color: #12A454;
    --redish-color: #E83F5B;
    --title-color: #363F5F;
    --text-color: #969CB3;
    --body-background-color: #F0F2F5;
    --card-background-color: #FFF;
    --link-color: #FFF;
  }
  body {
    background: #F0F2F5 ;
    -webkit-font-smoothing: antialiased
  }

  body, input, button {
    font: 16px "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
