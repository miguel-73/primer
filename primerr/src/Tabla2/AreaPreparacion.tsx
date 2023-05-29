import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function AreaPreparacion() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth  >
        <InputLabel id="demo-simple-select-helper-label">¿tiene area preparacion de usuario ?</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="¿tiene area preparacion de usuario ?"
          onChange={handleChange}
        >
         
          <MenuItem value={"si"}>si</MenuItem>
          <MenuItem value={"no"}>no</MenuItem>
         </Select>
        <FormHelperText>Seleccionar opcion</FormHelperText>
      </FormControl>
       
    </div>
  );
}