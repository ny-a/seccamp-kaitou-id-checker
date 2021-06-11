import React from 'react';
import { Checker } from './features/checker/Checker';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            SecCamp 回答ID Checker
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <header className="App-header">
          <Checker />
        </header>
      </Container>
    </div>
  );
}

export default App;
