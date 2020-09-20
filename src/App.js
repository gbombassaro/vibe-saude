import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
// import {MuiThemeProvider} from '@material-ui/core/styles'
import './App.css';

function App() {
  return (
    // <MuiThemeProvider>
    <BrowserRouter>
      <Switch>
        <Route path='/page1' component={Page1} />
        <Route path='/page2' component={Page2} />
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
    // </MuiThemeProvider>
  );
}

export default App;
