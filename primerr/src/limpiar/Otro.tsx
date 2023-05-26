import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import FormContext from '../context/useForm';

export default function Otro() {
  const {
    campo1Value,
    setCampo1Value,
  }: any
    = React.useContext(FormContext)
  return (
    <Stack
    >
      <TextField
        value={campo1Value.value2}
        onChange={(e) => setCampo1Value({
          ...campo1Value,
          value2: e.target.value,
        })}
      />
    </Stack>
  );
}
