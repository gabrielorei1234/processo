import { createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    padding: 0;
    margin: 0;
}
*{
    box-sizing:border-box;
    font-family: 'Arial', sans-serif;
    min-width: 4vh;
}
`
export default GlobalStyle