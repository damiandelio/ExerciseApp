import React, { Component } from 'react'
// import { Route, Switch } from "react-router-dom"
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '../views/AppBar';
import BottomNavigation from '../views/BottomNavigation';
import Calendar from './Calendar';
import Train from './Train';
import Exersices from './Exercises';

// Styles
import AppTheme from './AppTheme'
import { SlideCSS } from './AppStyled.js';


export default class App extends Component {
  state = {
    // index es el valor que indica la pestaña activa
    index: 1,
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
        <MuiThemeProvider theme={AppTheme}>
          <AppBar />
          <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
            <SlideCSS>
              <Calendar /> {/*Vista Calendar*/}
            </SlideCSS>
            <SlideCSS>
              <Train /> {/*Vista Train*/}
            </SlideCSS>
            <SlideCSS>
              <Exersices /> {/*Vista Exersices*/}
            </SlideCSS>
          </SwipeableViews>
          <BottomNavigation index={index} handleChange={this.handleChange} />
        </MuiThemeProvider>
      </CssBaseline>
    )
  }
}