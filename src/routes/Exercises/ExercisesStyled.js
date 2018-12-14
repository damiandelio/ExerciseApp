import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const CategoryName = styled.div`
  margin: 1rem 0 0.5rem 0;
  font-size: 14pt;
`

export const GridView = styled(Grid)`
  && {
    /* 3.5rem (alto del BottomNavigation) + 4rem (alto del NavBar)*/
    height: calc(100vh - 7.5rem);
    width:100%;
    padding: 0 1rem 0 1rem;
    overflow-y: scroll;
  }
`