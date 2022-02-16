import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html,
body {
  font-family: 'Inter', sans-serif;
}

body {
  font-size: 1.6rem;
  background-color: #E5E5E5;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

input,
button,
textarea,
select {
  font: inherit;
}

button {
  border: none;
  cursor: pointer;
  background-color: transparent;
}

button:focus:not(:focus-visible) {
  outline: none;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style-type: none;
}
`;
