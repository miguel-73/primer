import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FullWidthTextField() {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField
       fullWidth 
  helperText="Please enter your name"
  id="demo-helper-text-misaligned"
  label="Nombre"
/>
    </Box>
  );
}
