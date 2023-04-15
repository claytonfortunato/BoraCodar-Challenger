import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
        background-color: ${(props) => props.theme.black02};
    }

    a {
        color: ${(props) => props.theme.gray};
        font-size: 1.6rem;
        text-decoration: none;

        &:focus-within{
            color: inherit;
        }
    }
`;
