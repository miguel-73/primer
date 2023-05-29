import React, { useState, ChangeEvent } from 'react';
import { TextField, Button, Box } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Stack from '@mui/material/Stack';
// import TipoGraphy from './Typographi';

const UploadFile: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file || null);
  };

  return (
    <Box
    //  sx={{position: "relative", top: "-16px",}}
     >
      <Stack direction="row" spacing={2}>
      <input
        type="file"
        style={{ display: 'none' }}
        id="file-upload"
        onChange={handleFileSelect}
      />
      {/* <TipoGraphy /> */}
      <label htmlFor="file-upload">
        <Button variant="outlined" component="span" sx={{
          color: "#000000",
          borderColor: "#000000",
          borderRadius: "10px",
        }}
          endIcon={<SearchOutlinedIcon/>}>
          SELECCIONAR ARCHIVO
        </Button>
      </label>
      <TextField 
        label="Nombre del archivo"
        variant="outlined"
        value={selectedFile?.name || ''}
        disabled 
        sx={{top: "-1px",}}
        InputProps={{
          style: {
            height: "37px",
          }
        }}
      />
    </Stack>
    </Box>
  );
};

export default UploadFile;