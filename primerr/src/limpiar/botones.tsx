import React, { useContext, useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import FormContext from '../context/useForm';

export default function BasicButtons() {

    const {
        campo1Value,
        setCampo1Value,
        limpiarCampos,
    }: any
        = useContext(FormContext)
    return (
        <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={limpiarCampos}>Limpiar</Button>
            
            <TextField
                value={campo1Value.value1}
                onChange={(e) => setCampo1Value({
                    ...campo1Value,
                    value1: e.target.value,
                })}
            />

        </Stack>
    );
}
