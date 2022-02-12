import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    a {
        text-decoration: none;
        color: var(--white);
    }

    @media(max-width: 1400px) {
        html {
            font-size: 85%;
        }
    }
    @media(max-width: 720px) {
        html {
            font-size: 55%;
        }
    }
    @media(max-width: 720px) {
        html {
            font-size: 55%;
        }
    }
`;