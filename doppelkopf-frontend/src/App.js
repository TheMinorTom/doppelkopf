/*
Copyright 2019 MinorTom <me@minortom.net>, DaJaBe
https://go.minortom.net/doppelkopf

This file is part of Doppelkopf.

Doppelkopf is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Doppelkopf is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with Doppelkopf.  If not, see <https://www.gnu.org/licenses/>.
*/
import React from 'react';
import './App.css';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Account from './Account';
import StickyFooter from './StickyFooter';

const palette = {
  primary: { main: '#FFC107', contrastText: '#000000' },
  secondary: { main: '#FF6F00', contrastText: '#000000' }
};
const themeName = 'Amber Blaze Orange Banded Coral Shrimp';

const thm = createMuiTheme({ palette, themeName });

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: 'white',
  },
}));

function App() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
    <ThemeProvider theme={thm}>
    <SnackbarProvider maxSnack={3}>
        <CssBaseline />
        <Container component="main" className={classes.main} maxWidth="sm">
            <Account />
        </Container>
        <StickyFooter />
    </SnackbarProvider>
    </ThemeProvider>
    </div>
  );
}

export default App;
