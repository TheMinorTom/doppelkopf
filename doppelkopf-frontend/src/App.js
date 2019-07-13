import React from 'react';
import './App.css';
import 'typeface-roboto';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Button from '@material-ui/core/Button';

const palette = {
  primary: { main: '#FFC107', contrastText: '#000000' },
  secondary: { main: '#FF6F00', contrastText: '#000000' }
};
const themeName = 'Amber Blaze Orange Banded Coral Shrimp';

const theme = createMuiTheme({ palette, themeName });

function App() {
  return (
    <div className="App">
    <ThemeProvider theme={theme}>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
    </ThemeProvider>
    </div>
  );
}

export default App;
