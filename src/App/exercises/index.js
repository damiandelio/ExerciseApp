// Exercises view

import React, { Component } from 'react'

import AppBar from '../common/AppBar'

export default class Exercises extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <h2 style={{marginTop: '6rem'}}>Exercises</h2>
        <div style={{height: '70rem'}}></div>
      </div>
    )
  }
}