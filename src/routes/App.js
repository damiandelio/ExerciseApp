import React, { Component } from 'react'
// import { Route, Switch } from "react-router-dom"
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '../views/AppBar';
import BottomNavigation from '../views/BottomNavigation';
import Calendar from './Calendar';
import Train from './Train';
import Exersices from './Exercises';
import styled from 'styled-components'; // styled css

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#B71C1C',
    },
  },
});

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
        <MuiThemeProvider theme={theme}>
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



// styled

const SlideCSS = styled.div`
  height: 100vh;
  max-height: 100vh;
  padding-top: 3.5rem;
  overflow: scroll;
`