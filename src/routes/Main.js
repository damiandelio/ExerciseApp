import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

export default class Main extends Component {
  render {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={variable01} />
          <Route path='/exercise' render={props => <About {...props} extra={someVariable} />} />
        </Switch>
      </main>
    )
  }
}