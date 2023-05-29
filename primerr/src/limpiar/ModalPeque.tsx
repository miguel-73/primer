import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DescriptionIcon from '@mui/icons-material/Description';
import BlockIcon from '@mui/icons-material/Block';
import { FormControl, FormHelperText, Grid, IconButton, InputLabel, MenuItem, Paper, Select, TextField, styled } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height: 350,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Itemm = styled(Paper)(({ theme }) => ({
  background:
    "linear-gradient(90deg, rgba(51,87,0,1) 0%, rgba(29,34,82,1) 50%, rgba(0,194,255,1) 100%)",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function ModalPeque() {
  const [open, setOpen] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);
  const [buttonText, setButtonText] = React.useState("Iniciar cuarentena");
  const [buttonColor, setButtonColor] = React.useState<"primary" | "error">("primary");

  const handleOpen = () => {
    setOpen(true);
    setIsClicked(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleButtonClick = () => {
    setButtonText("Cuarentena iniciada");
    setButtonColor("error");
  };

  return (
    <div>
      {!isClicked ? (
        <IconButton onClick={handleOpen}>
          <DescriptionIcon />
        </IconButton>
      ) : (
        <IconButton disabled>
          <BlockIcon />
        </IconButton>
      )}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {/* Contenido del modal */}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Itemm>
                  <Typography sx={{ color: "white" }} variant="h6" gutterBottom>
                    INFORMACION PRINCIPAL
                  </Typography>
                </Itemm>
              </Grid>
              <Grid item xs={12}>
                  Seleccione vivero
              </Grid>
              <Grid item xs={12}>
             

                <FormControl fullWidth>
                  <InputLabel id="municipio-label">Vivero principal</InputLabel>
                  <Select
                    labelId="municipio-label"
                    id="municipio-label"
                    label="Vivero principal"
                  >
                    <MenuItem value="">Seleccionar vivero</MenuItem>
                    <MenuItem value="Villavicencio">Villavicencio</MenuItem>
                    <MenuItem value="Acacías">Acacías</MenuItem>
                    <MenuItem value="Cumaral">Cumaral</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="justificacion ingreso a cuarentena" id="fullWidth" />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  onClick={handleButtonClick}
                  color={buttonColor}
                  startIcon={buttonColor === "error" ? <LockIcon /> : null}
                  endIcon={buttonColor === "error" ? <LockOpenIcon /> : null}
                >
                  {buttonText}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
