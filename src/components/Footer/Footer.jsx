import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';

export default function Footer() {

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation sx={{ width: '100%' }}>
          <p>This is Footer Section</p>
      </BottomNavigation>
    </Paper>
  );
}
