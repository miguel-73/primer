import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DataGrid, GridRowId } from "@mui/x-data-grid";
import { FormControl, FormHelperText, Grid, InputLabel, MenuItem, Paper, Select, Typography, styled } from "@mui/material";
import MyDataGrid from "./Tabla";
import TipoVivero from "./TipoVivero";
import { Sidebar } from "primereact/sidebar";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import AreaPreparacion from "./AreaPreparacion";
import AreaProdiccion from "./AreaProdiccion";
import AreaEmbolsado from "./AreaEmbolsado";
import CreadoPor from "./CreadoPor";
import UploadFile from "./Seleccionar";
type Persona = {
    id: number;
    nombre: string;
    Disponible: string;
    Direccion: string;
    Municipio: string;
    Estado: string;
    Cuarentena: string;
    Area: string;
    AreaPropagacion: string; // Nuevo campo
    Accion: string; // Nuevo campo
};
const Itemm = styled(Paper)(({ theme }) => ({
    background: 'linear-gradient(90deg, rgba(51,87,0,1) 0%, rgba(29,34,82,1) 50%, rgba(0,194,255,1) 100%)',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    borderRadius: "1"
}));

const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'end',
    color: theme.palette.text.secondary,
}));
const CrearPersonaButton = () => {
    const [open, setOpen] = useState(false);
    const [nombre, setNombre] = useState("");
    const [Disponible, setDisponible] = useState("");
    const [Direccion, setDireccion] = useState("");
    const [Municipio, setMunicipio] = useState("");
    const [Estado, setEstado] = useState("");
    const [Cuarentena, setCuarentena] = useState("");
    const [Area, setArea] = useState("");
    const [AreaPropagacion, setAreaPropagacion] = useState(""); // Nuevo estado
    const [Accion, setAccion] = useState(""); // Nuevo estado
    const [personas, setPersonas] = useState<Persona[]>([]);
    const [nextId, setNextId] = useState(1);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleNombreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNombre(event.target.value);
    };

    const handleDisponibleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDisponible(event.target.value);
    };

    const handleDireccionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDireccion(event.target.value);
    };

    const handleMunicipioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMunicipio(event.target.value);
    };

    const handleEstadoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEstado(event.target.value);
    };

    const handleCuarentenaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCuarentena(event.target.value);
    };

    const handleAreaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setArea(event.target.value);
    };

    const handleAreaPropagacionChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setAreaPropagacion(event.target.value);
    }; // Nuevo controlador de cambios

    const handleAccionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAccion(event.target.value);
    }; // Nuevo controlador de cambios

    const handleGuardar = () => {
        const nuevaPersona: Persona = {
            id: nextId,
            nombre,
            Disponible,
            Direccion,
            Municipio,
            Estado,
            Cuarentena,
            Area,
            AreaPropagacion, // Nuevo campo
            Accion, // Nuevo campo
        };

        setPersonas((prevPersonas) => [...prevPersonas, nuevaPersona]);
        setNextId((prevId) => prevId + 1);

        setNombre("");
        setDisponible("");
        setDireccion("");
        setMunicipio("");
        setEstado("");
        setCuarentena("");
        setArea("");
        setAreaPropagacion(""); // Restablecer el estado de AreaPropagacion
        setAccion(""); // Restablecer el estado de Accion
        handleClose();
    };
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    {/* <Button startIcon={<AddIcon />} color="primary" onClick={handleOpen}>
            Crear Persona
          </Button> */}
                    <Button onClick={() => setVisible(true)} >CREAR VIVERO</Button>
                </Grid>
                <Grid item xs={12}>
                    <MyDataGrid personas={personas} />
                </Grid>
            </Grid>
            <Sidebar visible={visible} onHide={() => setVisible(false)} fullScreen>

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 2 }}>

                    <Grid xs={12}>
                        <Itemm>
                            <Typography sx={{ color: "white", }} variant="h6" gutterBottom>
                                INFORMACION PRINCIPAL
                            </Typography>
                        </Itemm>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Nombre"
                            fullWidth
                            value={nombre}
                            onChange={handleNombreChange}
                        />
                        <FormHelperText>Ingrese Nombre</FormHelperText>

                    </Grid>
                    <Grid item xs={6}>
                        {/* <Item> <TextField
            label="Municipio"
            fullWidth
            value={Municipio}
            onChange={handleMunicipioChange}
          /></Item> */}




                        <FormControl fullWidth>
                            <InputLabel id="municipio-label">Municipio</InputLabel>
                            <Select
                                labelId="municipio-label"
                                id="municipio-label"
                                value={Municipio}
                                label="Municipio"
                                onChange={(e) => setMunicipio(e.target.value)}
                            >

                                <MenuItem value="">Seleccionar municipio</MenuItem>
                                <MenuItem value="Villavicencio">Villavicencio </MenuItem>
                                <MenuItem value="Acacías">Acacías</MenuItem>
                                <MenuItem value="Cumaral">Cumaral</MenuItem>
                            </Select>
                            <FormHelperText>Selecione municipio </FormHelperText>
                        </FormControl>

                    </Grid>



                    <Grid item xs={6}>
                        <TextField
                            label="Direccion"
                            fullWidth
                            value={Direccion}
                            onChange={handleDireccionChange}
                        />
                        <FormHelperText>Ingrese dirección</FormHelperText>

                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Area m2"
                            fullWidth
                            value={Area}
                            onChange={handleAreaChange}
                        />
                        <FormHelperText>Ingrese area</FormHelperText>

                    </Grid>
                    <Grid item xs={5.9}>


                        <TipoVivero />


                    </Grid>


                    <Grid xs={12}>
                        <Itemm>
                            <Typography sx={{ color: "white", }} variant="h6" gutterBottom>
                                DETALLE VIVERO
                            </Typography>
                        </Itemm>
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            label="Area de Propagacion m2" // Nuevo campo
                            fullWidth
                            value={AreaPropagacion}
                            onChange={handleAreaPropagacionChange}
                        />
                        <FormHelperText>Ingrese area</FormHelperText>

                    </Grid>
                    <Grid item xs={6}>

                        {/* <TextField
                                label="Disponible"
                                fullWidth
                                value={Disponible}
                                onChange={handleDisponibleChange}
                            /> */}
                        <AreaProdiccion />


                    </Grid>



                    <Grid item xs={6}>

                        {/* <TextField
                            label="Estado"
                            fullWidth
                            value={Estado}
                            onChange={handleEstadoChange}
                        /> */}
                        <AreaPreparacion />

                    </Grid>


                    <Grid item xs={6}>

                        {/* <TextField
                            label="Cuarentena"
                            fullWidth
                            value={Cuarentena}
                            onChange={handleCuarentenaChange}
                        /> */}
                        <AreaEmbolsado />

                    </Grid>


                    <Grid item xs={6}>

                        {/* <TextField
                            label="Accion" // Nuevo campo
                            fullWidth
                            value={Accion}
                            onChange={handleAccionChange}
                        /> */}
                        <CreadoPor />

                    </Grid>
                    <Grid item xs={5}>
                        <UploadFile />
                    </Grid>
                    {/* <Grid item xs={6}>
                        <Item>  </Item>
                    </Grid> */}
                    
                    <Grid item xs={12}>
                        <Item>
                            <Button onClick={handleGuardar}>Guardar</Button>
                        <Button onClick={() => setVisible(false)}>Cerrar</Button>  </Item>
                    </Grid>


                </Grid>
            </Sidebar>

        </>
    );
};

export default CrearPersonaButton;
