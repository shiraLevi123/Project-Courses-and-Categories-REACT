import React from 'react';
import Box from '@mui/material/Box';

const CenteredContainer = ({ children }) => (
  <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      textAlign: 'center',
      fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
      color: '#213547',
      bgcolor: 'background.default',
    }}
  >
    {children}
  </Box>
);

export default CenteredContainer;
