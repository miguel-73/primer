import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { DataGrid, GridColDef, GridRowId } from "@mui/x-data-grid";
import { Sidebar } from "primereact/sidebar";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import UploadFile from "../Tabla2/Seleccionar";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import ModalPeque from "./ModalPeque";
import TextButtons from "./Esstado";
import Disponible from "./Disponible";
import TipoVivero from "../Tabla2/TipoVivero";
import AreaProdiccion from "../Tabla2/AreaProdiccion";
import AreaPreparacion from "../Tabla2/AreaPreparacion";
import AreaEmbolsado from "../Tabla2/AreaEmbolsado";
import CreadoPor from "../Tabla2/CreadoPor";
import Cuarentena from "./Cuarentena";
const Item = styled(Paper)(({ theme }) => ({
  background:
    "linear-gradient(90deg, rgba(51,87,0,1) 0%, rgba(29,34,82,1) 50%, rgba(0,194,255,1) 100%)",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));
const Itemm = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "end",
  color: theme.palette.text.secondary,
}));
export const CRUD = () => {
  const [rows, setRows] = useState<
    {
      id: number;
      nombre: string;
      disponible: boolean;
      direccion: string;
      municipio: string;
      estado: string;
      cuarentena: boolean;
      area: string;
      areaPropagada: string;
      accion: number;
    }[]
  >([]);
  const [id, setId] = useState(1);
  const [nombre, setNombre] = useState("");
  const [disponible, setDisponible] = useState(true);
  const [direccion, setDireccion] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [estado, setEstado] = useState("");
  const [cuarentena, setCuarentena] = useState(false);
  const [area, setArea] = useState("");
  const [areaPropagada, setAreaPropagada] = useState("");
  const [editRowId, setEditRowId] = useState<GridRowId | null>(null);
  const handleEditar = (id: GridRowId) => {
    setEditRowId(id);
  };
  const handleGuardarEdicion = (id: GridRowId) => {
    const updatedRows = rows.map((row) => {
      if (row.id === id) {
        return {
          ...row,
          nombre: nombre,
          direccion: direccion,
          municipio: municipio,
          area:area,
          areaPropagada:areaPropagada,
        };
      }
      return row;
    });
    setRows(updatedRows);
    setEditRowId(null);
  };
  const handleCancelarEdicion = () => {
    setEditRowId(null);
  };
  const handleBorrar = (id: GridRowId) => {
    const parsedId = typeof id === "number" ? id : parseInt(id, 10);
    const updatedRows = rows.filter((row) => row.id !== parsedId);
    setRows(updatedRows);
  };
  const handleGuardar = () => {
    const newRow = {
      id: id,
      nombre: nombre,
      disponible: disponible,
      direccion: direccion,
      municipio: municipio,
      estado: estado,
      cuarentena: cuarentena,
      area: area,
      areaPropagada: areaPropagada,
      accion: 0,
    };
    setRows((prevRows) => [...prevRows, newRow]);
    setId(id + 1);
    setNombre("");
    setDisponible(true);
    setDireccion("");
    setMunicipio("");
    setEstado("");
    setCuarentena(false);
    setArea("");
    setAreaPropagada("");
  };
  const [visible, setVisible] = useState<boolean>(false);
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 99 },
    {
      field: "nombre",
      headerName: "Nombre",
      width: 100,
      renderCell: (params) => (
        <>
          {params.id === editRowId ? (
            <TextField
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          ) : (
            <span>{params.value}</span>
          )}
        </>
      ),
    },
    {
      field: "disponible",
      headerName: "Disponible",
      width: 100,
      renderCell: (params) => (
        <>
          <Disponible />
        </>
      ),
    },
    {
      field: "direccion",
      headerName: "Dirección",
      width: 100,
      renderCell: (params) => (
        <>
          {params.id === editRowId ? (
            <TextField
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
          ) : (
            <span>{params.value}</span>
          )}
        </>
      ),
    },
    {
      field: "municipio",
      headerName: "Municipio",
      width: 100,
      renderCell: (params) => (
        <>
          {params.id === editRowId ? (
            <TextField
              value={municipio}
              onChange={(e) => setMunicipio(e.target.value)}
            />
          ) : (
            <span>{params.value}</span>
          )}
        </>
      ),
    },
    {
      field: "estado",
      headerName: "Estado",
      width: 100,
      renderCell: (params) => (
        <>
          <TextButtons />
        </>
      ),
    },
    {
      field: "cuarentena",
      headerName: "Cuarentena",
      width: 150,
      renderCell: (params) => (
        <>
          <Cuarentena />
        </>
      ),
    },
    { field: "area", headerName: "Área", width: 100,  renderCell: (params) => (
      <>
        {params.id === editRowId ? (
          <TextField
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        ) : (
          <span>{params.value}</span>
        )}
      </>
    ),
   },
    { field: "areaPropagada", headerName: "Área Propagada", width: 160,renderCell: (params) => (
      <>
        {params.id === editRowId ? (
          <TextField
            value={areaPropagada}
            onChange={(e) => setAreaPropagada(e.target.value)}
          />
        ) : (
          <span>{params.value}</span>
        )}
      </>
    ), },
    {
      field: "accion",
      headerName: "Acción",
      width: 200,
      renderCell: (params) => (
        <>
          {params.id === editRowId ? (
            <>
              <IconButton onClick={() => handleGuardarEdicion(params.id)}>
                <SaveIcon />
              </IconButton>
              <IconButton onClick={() => handleCancelarEdicion()}>
                <CancelIcon />
              </IconButton>
            </>
          ) : (
            <IconButton onClick={() => handleEditar(params.id)}>
              <EditIcon />
            </IconButton>
          )}
          <ModalPeque />
          <IconButton onClick={() => handleBorrar(params.id)}>
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Button onClick={() => setVisible(true)}>CREAR VIVERO</Button>
      </Grid>
      <Box sx={{ boxShadow: 5 }}>
        <div className="card flex justify-content-center">
          <Sidebar visible={visible} onHide={() => setVisible(false)} fullScreen>
            {/* Aquí puedes colocar el contenido del Sidebar */}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Item>
                  <Typography sx={{ color: "white" }} variant="h6" gutterBottom>
                    INFORMACION PRINCIPAL
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  variant="outlined"
                  size="small"
                  helperText="ingresa nombre"
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="municipio-label">municipio</InputLabel>
                  <Select
                    labelId="municipio-label"
                    id="municipio-label"
                    value={municipio}
                    label="municipio"
                    onChange={(e) => setMunicipio(e.target.value)}
                    style={{ height: '41px' }}
                  >
                    <MenuItem value="">Seleccionar municipio</MenuItem>
                    <MenuItem value="Villavicencio">Villavicencio </MenuItem>
                    <MenuItem value="Acacías">Acacías</MenuItem>
                    <MenuItem value="Cumaral">Cumaral</MenuItem>
                  </Select>
                  <FormHelperText>Seleccionar municipio</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Dirección"
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                  variant="outlined"
                  size="small"
                  helperText="ingresa dirección"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Área"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  variant="outlined"
                  size="small"
                  helperText="Please enter your name"
                />
              </Grid>
              <Grid item xs={6}>
                <TipoVivero />
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <Typography sx={{ color: "white" }} variant="h6" gutterBottom>
                    viveros
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Área programacion m2"
                  value={areaPropagada}
                  onChange={(e) => setAreaPropagada(e.target.value)}
                  variant="outlined"
                  size="small"
                  helperText="Please enter your name"
                />
              </Grid>
              <Grid item xs={6}>
                <AreaProdiccion />
              </Grid>
              <Grid item xs={6}>
                <AreaPreparacion />
              </Grid>
              <Grid item xs={6}>
                <AreaEmbolsado />
              </Grid>
              <Grid item xs={6}>
                <CreadoPor />
              </Grid>
              <Grid item xs={6}>
                <UploadFile />
              </Grid>
              <Grid item xs={12}>
                <Itemm>
                  <Button onClick={handleGuardar}>Guardar</Button>
                  <Button onClick={() => setVisible(false)}>Cerrar</Button>
                </Itemm>
              </Grid>
            </Grid>
            {/* Aquí puedes colocar el contenido del Sidebar */}
          </Sidebar>
          <Grid container rowSpacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <Box sx={{ ml: 1, mr: 1 }}>
                <div style={{ height: 400, width: "100%" }}>
                  <DataGrid rows={rows} columns={columns} />
                </div>
              </Box>
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
};
