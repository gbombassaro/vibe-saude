import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import Page1 from './components/Page1';
import PageBooks from './components/PageBooks';
// import {MuiThemeProvider} from '@material-ui/core/styles'

function App() {
  return (
  // <MuiThemeProvider>
    <BrowserRouter>
      <Switch>
        <Route path='/page1' component={Page1} />
        <Route path='/books' component={PageBooks} />
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  // </MuiThemeProvider>
  );
}

export default App;
