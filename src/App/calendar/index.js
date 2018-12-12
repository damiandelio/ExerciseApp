// Calendar view

import React, { Component } from 'react';
import AppBar from '../common/AppBar'

export default class Calendar extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <h2 style={{marginTop: '6rem'}}>Calendar</h2>
      </div>
    )
  }
}