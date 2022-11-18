import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
    --background: #F5F7FA;
    --font: #A3A3A3;
    --grey2: #9D9E9D;
    --primary: #78ACEE;
    --blue: #81A4D1;
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

.App{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh; 
    background-color: var(--background);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

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
`;
export default GlobalStyle;
