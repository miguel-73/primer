import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
 import Typography from '@mui/material/Typography';
import Modal from '../ModalCrear/Modal';

const Item = styled(Paper)(({ theme }) => ({
    background: 'linear-gradient(90deg, rgba(51,87,0,1) 0%, rgba(29,34,82,1) 50%, rgba(0,194,255,1) 100%)',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    borderRadius:"122"
}));

const Itemm = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function GridModal() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <Item>
                        <Typography sx={{ color: "white", }} variant="h6" gutterBottom>
                            INFORMACION PRINCIPAL
                        </Typography>
                    </Item>
                </Grid>   
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid xs={6}>
    <Itemm>1</Itemm>
  </Grid>
  <Grid xs={6}>
    <Itemm>2</Itemm>
  </Grid>
  <Grid xs={6}>
    <Itemm>3</Itemm>
  </Grid>
  <Grid xs={6}>
    <Itemm>4</Itemm>
  </Grid>
  <Grid xs={6}>
    <Itemm>4</Itemm>
  </Grid>
</Grid>
            
        </Box>
    );
}
