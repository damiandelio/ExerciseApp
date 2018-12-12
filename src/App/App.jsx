// App

import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom"

// materia-ui
import CssBaseline from '@material-ui/core/CssBaseline';

// Routes
import Train from './train'
import Exercises from './exercises'
import Calendar from './calendar'
const NoMatch = () => <h1>Error 404</h1>

export default class App extends Component {
  render() {
    return (
      <CssBaseline>
        <Switch>
          <Route exact path='/' component={Train} />
          <Route path='/home' component={Train} />
          <Route path='/train' component={Train} />

          <Route path='/exercises' component={Exercises} />

          <Route path='/calendar' component={Calendar} />

          {/* No such directory */}
          <Route component={NoMatch} />
        </Switch>
      </CssBaseline>
    )
  }
}
