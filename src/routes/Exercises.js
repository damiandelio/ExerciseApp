import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import ExercisesPreview from '../views/ExercisesPreview';

// styles
import { CategoryName } from './ExercisesStyled';

export default class Exercises extends Component {
  render() {
    return (
      <Grid container style={{maxWidth: '30rem'}}>
        <CategoryName>Static: </CategoryName>
        <ExercisesPreview exerciseImg='' exerciseName='' exerciseDescription='' videoUrl='' />
        <ExercisesPreview exerciseImg='' exerciseName='' exerciseDescription='' videoUrl='' />
        <ExercisesPreview exerciseImg='' exerciseName='' exerciseDescription='' videoUrl='' />
        <ExercisesPreview exerciseImg='' exerciseName='' exerciseDescription='' videoUrl='' />
        <ExercisesPreview exerciseImg='' exerciseName='' exerciseDescription='' videoUrl='' />
        <ExercisesPreview exerciseImg='' exerciseName='' exerciseDescription='' videoUrl='' />
        <ExercisesPreview exerciseImg='' exerciseName='' exerciseDescription='' videoUrl='' />
        <ExercisesPreview exerciseImg='' exerciseName='' exerciseDescription='' videoUrl='' />
      </Grid>
    )
  }
}