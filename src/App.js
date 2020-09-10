import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Provider from "./Provider";

import { GlobalStyles } from "./global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <GlobalStyles />
        <Header />
        <Main />
        <Footer />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
