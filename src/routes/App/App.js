import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom"
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

// Route
import Main from '../../containers/Main';
import NoMatchDirectory from '../../views/NoMatchDirectory';

// Styles
import AppTheme from './AppTheme'


export default class App extends Component {
  state = { };

  render() {
    return (
      <CssBaseline>
        <MuiThemeProvider theme={AppTheme}>
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route component={NoMatchDirectory} />
          </Switch>
        </MuiThemeProvider>
      </CssBaseline>
    )
  }
}