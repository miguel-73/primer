import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormContext from '../context/useForm';

export default function CampoTres() {
  const {
    campo1Value,
    setCampo1Value,
  }: any
    = React.useContext(FormContext)
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={campo1Value.value3}
        onChange={(e) => setCampo1Value({
          ...campo1Value,
          value3: e.target.value,
        })}
      />
    </>
  );
}
