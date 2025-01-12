import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFEB3B',
    },
    secondary: {
      main: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export default theme;
