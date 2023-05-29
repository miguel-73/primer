import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function TipoVivero() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth sx={{ m: 1, minWidth: 120,left:-5 }}>
        <InputLabel id="demo-simple-select-helper-label">Tipo vivero</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Tipo vivero"
          onChange={handleChange}
          style={{ height: '45px' }} // Cambio de tamaño de altura a 200px
        >
          <MenuItem value={10}>tipo 1</MenuItem>
          <MenuItem value={20}>tipo 2</MenuItem>
          <MenuItem value={30}>tipo 3</MenuItem>
        </Select>
        <FormHelperText>Seleccione tipo de vivero</FormHelperText>
      </FormControl>
    </div>
  );
}
