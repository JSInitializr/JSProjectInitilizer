import React, { Component } from 'react';
// import Container from './components/container/container';
import TopNavigation from './components/layouts/TopNavigation';
import BottomNavigation from './components/layouts/BottomNavigation';
import MainContainer from './components/layouts/MainContainer';
import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { isUserWhitespacable } from '@babel/types';

const theme = createMuiTheme({
  palette: {
    background:'white',
  },
});

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <TopNavigation></TopNavigation>
      <MainContainer></MainContainer>
      <BottomNavigation></BottomNavigation>
      </ThemeProvider>
    );
  }
}

export default App;
