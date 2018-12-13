import React, { Component } from 'react'
// import { Route, Switch } from "react-router-dom"
import CssBaseline from '@material-ui/core/CssBaseline';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '../views/AppBar';
import Calendar from './Calendar';
import Train from './Train';
import Exersices from './Exercises';

const styles = {
  slide: {
    minHeight: '100vh',
    color: '#fff',
    paddingTop: '1px', // fix bug (?)
  },
  slide1: {
    background: '#FEA900',
  },
  slide2: {
    background: '#B3DC4A',
  },
  slide3: {
    background: '#6AC0FF',
  },
};

export default class App extends Component {
  state = {
    index: 0,
  };

  handleChange = (event, value) => {
    this.setState({
      index: value,
    });
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };
  
  render() {
    const { index } = this.state;

    return (
      <CssBaseline>
        <AppBar />
        <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
          <div style={Object.assign({}, styles.slide, styles.slide1)}>
            <Calendar />
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
            <Train />
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}>
            <Exersices />
          </div>
        </SwipeableViews>

        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'fixed', zIndex: 9999, width: '100%', height: '3rem', top: '100vh', marginTop: '-3rem', background: '#000'}}>
          <button onClick={()=> this.setState({index: 0})}>Calendar</button>
          <button onClick={()=> this.setState({index: 1})}>Train</button>
          <button onClick={()=> this.setState({index: 2})}>Exersices</button>
        </div>
      </CssBaseline>
    )
  }
}
