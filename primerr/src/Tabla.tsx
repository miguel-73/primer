import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import { DataGrid, GridColDef, GridRowId } from "@mui/x-data-grid";

export const CRUD = () => {
  const [rows, setRows] = React.useState<
    { id: number; nombre: string; apellido: string; telefono: string; accion: number; }[]
  >([]);
  const [nombre, setNombre] = React.useState("");
  const [apellido, setApellido] = React.useState("");
  const [codigo, setCodigo] = React.useState(1);
  const [telefono, setTelefono] = React.useState("");

  

  const columns: GridColDef[] = [
    { field: "id", headerName: "Codigo", width: 150 },
    { field: "nombre", headerName: "Nombre", width: 150 },
    { field: "apellido", headerName: "Apellido", width: 150 },
    { field: "telefono", headerName: "Telefono", width: 150 },
    { field: 'accion', headerName: 'Acción', width: 150, renderCell: (params) => <Button onClick={() => handleBorrar(params.id)}>Borrar</Button> },
  ];

  const handleBorrar = (id: GridRowId) => {
    const parsedId = typeof id === 'number' ? id : parseInt(id, 10);
    const updatedRows = rows.filter((row) => row.id !== parsedId);
    setRows(updatedRows);
  };

  const handleGuardar = () => {

    if (nombre.trim() === '' || telefono.trim() === '' || apellido.trim() === '') {
      return; // Evita guardar si alguno de los campos está vacío
    }

    const newRow = {
      id: codigo,
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
      accion: 0,
    };

    setRows((prevRows) => [...prevRows, newRow]);
    setCodigo(codigo + 1);
    setNombre("");
    setApellido("");
    setTelefono("");
  };

  return (
    <Box
      sx={{
        boxShadow: 5,
      }}
    >
      <Grid container rowSpacing={2} sx={{ mt: 1 }}>
        <Grid item xs={4}>
          <TextField
            id="outlined-basic"
            label="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-basic"
            label="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-basic"
            label="Telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ ml: 1, mr: 1 }}>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid rows={rows} columns={columns} />
            </div>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleGuardar}>
            Guardar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};