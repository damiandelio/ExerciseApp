import { createMuiTheme } from '@material-ui/core/styles';

// tema de la aplicacion
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#B71C1C',
    },
    typography: {
      useNextVariants: true,
    },
  },
});

export default theme;