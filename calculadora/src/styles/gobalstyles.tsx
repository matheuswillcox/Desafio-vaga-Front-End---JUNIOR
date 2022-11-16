import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`



:root{
    --background: #F5F7FA;
    --font: #A3A3A3;
    --primary: #78ACEE;
    --internalBackground: #F7F9FA;
    --border: lightgrey;

}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-size: 1rem;
    vertical-align: baseline;

}

body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1;
}

ol, ul {
	list-style: none;
}

a {
    text-decoration: none;
}

button {
    cursor: pointer;
}    
`
export default GlobalStyle

;
