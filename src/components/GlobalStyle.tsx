import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html,body{
        font-family: "Inter", sans-serif;
        font-size: 12px;
        font-weight: 500;
    }

    #root{
        min-height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #F5F5F5;
        line-height: 20px;
        color: #abb3ba;
    }

    a{
      text-decoration: none;
    }

`;

export { GlobalStyle };
