import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    :root {
        --gray-100: #f8f9fa;
        --gray-200: #ced4da;
        --gray-400: #6c757d;
        --gray-600: #343a40;

        --blue-100: #5fa8d3;
        --blue-300: #1b4965;

        --red-400: #d90429
   
};

    * {
        margin: 0;
        border: 0;
        padding: 0px;
        outline: unset;

        font-family: 'Signika Negative', sans-serif;
        font-weight: 500;
        font-size: 1rem;

        list-style: none;

        box-sizing: border-box;
    };
`
export default GlobalStyle
