import React, { Component } from 'react'
import SwipeableViews from 'react-swipeable-views';

import AppBar from '../views/AppBar';
import BottomNavigation from '../views/BottomNavigation';
import Calendar from '../routes/Calendar/Calendar';
import Train from '../routes/Train';
import Exersices from '../routes/Exercises/Exercises';

// Styles
import { SlideCSS } from './MainStyled';



export default class Main extends Component {
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
      <main>
        <AppBar title='ExerciseApp' />
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
      </main>
    )
  }
}