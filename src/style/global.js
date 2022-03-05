import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: #F5F5F5;
    font-family: 'Open Sans', sans-serif;
}

html{
    font-size: 62.5%;
    overflow: scroll ;
}

button{
    font-family: 'Open Sans', sans-serif;
    cursor: pointer;
}
`