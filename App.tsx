import React from 'react';
import styledTheme from './src/lib/styled-theme'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import MainScreen from "./src/screens/MainScreen";

export default function App() {



  return (
      <StyledThemeProvider theme={styledTheme}>
            <MainScreen/>
      </StyledThemeProvider>
  );
}

