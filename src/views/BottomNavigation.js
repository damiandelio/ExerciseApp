import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// Material icons
import TrainIcon from '@material-ui/icons/PlayCircleOutline';
import ExercisesIcon from '@material-ui/icons/List';
import CalendarIcon from '@material-ui/icons/DateRange';


const AppBottomNavigation = ({ index, handleChange }) => {
  return (
    <BottomNavigation
      value={index}
      onChange={handleChange}
      showLabels
      style={{position: 'fixed', bottom: '0px', width: '100%'}}
    >
      <BottomNavigationAction label="Calendar" icon={<CalendarIcon />} />
      <BottomNavigationAction label="Train" icon={<TrainIcon />} />
      <BottomNavigationAction label="Exercises" icon={<ExercisesIcon />} />
    </BottomNavigation>
  );
}

export default withStyles()(AppBottomNavigation);