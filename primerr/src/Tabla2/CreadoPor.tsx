import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function CreadoPor() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth  >
        <InputLabel id="demo-simple-select-helper-label">¿vivero creaado por medio de ?</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="¿vivero creaado por medio de ?"
          onChange={handleChange}
          style={{ height: '45px' }} 
        >
          
          <MenuItem value={10}>Medio 1</MenuItem>
          <MenuItem value={20}>Medio 2</MenuItem>
          <MenuItem value={30}>Medio 2</MenuItem>
        </Select>
        <FormHelperText>Elija origen recurso</FormHelperText>
      </FormControl>
       
    </div>
  );
}