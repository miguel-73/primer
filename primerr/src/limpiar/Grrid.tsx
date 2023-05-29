import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import MaterialDataGrid from './TablaVivero';
import Typography from '@mui/material/Typography';
import Modal from '../ModalCrear/Modal';
import { CRUD } from './Crud';

const Item = styled(Paper)(({ theme }) => ({
    background: 'linear-gradient(90deg, rgba(51,87,0,1) 0%, rgba(29,34,82,1) 50%, rgba(0,194,255,1) 100%)',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

const Itemm = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Grrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <Item>
                        <Typography sx={{ color: "white" }} variant="h6" gutterBottom>
                            viveros
                        </Typography>
                    </Item>
                </Grid>
{/* 
                <Grid xs={12}>
                    <Modal />
                </Grid> */}


                <Grid xs={12}>
                    <Itemm>
                        {/* <MaterialDataGrid /> */}
                        <CRUD/>
                    </Itemm>
                </Grid>

                
            </Grid>
        </Box>
    );
}
