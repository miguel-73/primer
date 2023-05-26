import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'nombre', headerName: 'Nombre', width: 150 },
  { field: 'disponible', headerName: '¿Disponible?', width: 120 },
  { field: 'direccion', headerName: 'Dirección', width: 200 },
  { field: 'municipio', headerName: 'Municipio', width: 150 },
  { field: 'estado', headerName: 'Estado', width: 120 },
  { field: 'cuarentena', headerName: 'Cuarentena', width: 120 },
  { field: 'area', headerName: 'Área', width: 120 },
  { field: 'area_propagacion', headerName: 'Área de Propagación', width: 180 },
  {
    field: 'acciones',
    headerName: 'Acciones',
    width: 150,
    sortable: false,
    renderCell: () => (
      <div>
        {/* Aquí puedes agregar los botones de acciones */}
      </div>
    ),
  },
];

const rows = [
  { id: 1, nombre: 'Material 1', disponible: 'Sí', direccion: 'Calle 1', municipio: 'Municipio 1', estado: 'Estado 1', cuarentena: 'Sí', area: 'Área 1', area_propagacion: 'Área Propagación 1' },
  { id: 2, nombre: 'Material 2', disponible: 'No', direccion: 'Calle 2', municipio: 'Municipio 2', estado: 'Estado 2', cuarentena: 'No', area: 'Área 2', area_propagacion: 'Área Propagación 2' },
  // Agrega más filas según sea necesario
];

const MaterialDataGrid = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      
      <DataGrid rows={rows} columns={columns}  checkboxSelection />
    </div>
  );
};

export default MaterialDataGrid;
