import React from 'react';
import Grid from '@material-ui/core/Grid';

// styles
import { Container, Img } from './ExercisesPreviewStyled'

const ExercisePreview = () => {
  return(
    <Grid item xs={12}>
      <Container>
        <Img />
      </Container>
    </Grid>
  )
}

export default ExercisePreview;
