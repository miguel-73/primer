import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CampoTres from './CapoTres';
import BasicButtons from './botones';
import BasicSelect from './TexLis';
import Otro from './Otro';
 
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Gridd() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={6} md={3} >
        <Item> <CampoTres/></Item>
        </Grid>
        <Grid xs={6} md={3}>
          <Item><BasicButtons/></Item>
        </Grid>
        <Grid xs={6} md={3}>
          <Item> <BasicSelect/></Item>
        </Grid>
        <Grid xs={6} md={3}>
          <Item> <Otro/></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
