import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function AreaProdiccion() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth  >
        <InputLabel id="demo-simple-select-helper-label">Tiene ara de produccion</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Tiene ara de produccion"
          onChange={handleChange}
          style={{ height: '41px' }} 
        >
          
          <MenuItem value={"si"}>si</MenuItem>
          <MenuItem value={"no"}>no</MenuItem>
        </Select>
        <FormHelperText>Seleccione obcion </FormHelperText>
      </FormControl>
       
    </div>
  );
}