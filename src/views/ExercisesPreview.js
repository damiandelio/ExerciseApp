import React from 'react';
import Grid from '@material-ui/core/Grid';

// styles
import { Container, Img } from './ExercisesPreviewStyled'

const ExercisePreview = ({exerciseName, exerciseImg}) => {
  return(
    <Grid item xs={12}>
      <Container>
        <Img />
        <p style={{marginLeft: '1rem'}}>{exerciseName}</p>
      </Container>
    </Grid>
  )
}

export default ExercisePreview;
