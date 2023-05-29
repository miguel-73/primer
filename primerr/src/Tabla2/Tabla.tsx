import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

type Persona = {
  id: number;
  nombre: string;
  Disponible: string;
  Direccion: string;
  Municipio: string;
  Estado: string;
  Cuarentena: string;
  Area: string;
  AreaPropagacion: string;
  Accion: string;
};

interface DataGridProps {
  personas: Persona[];
}

const CustomDataGrid: React.FC<DataGridProps> = ({ personas }) => {
  const [rows, setRows] = useState(personas);
  const [editableRowId, setEditableRowId] = useState<number | null>(null);

  const handleEliminarFila = (id: number) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  };

  const handleEditarCampo = (id: number, field: string, value: string) => {
    const updatedRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, [field]: value };
      }
      return row;
    });
    setRows(updatedRows);
  };

  const handleGuardarEdicion = () => {
    setEditableRowId(null);
  };

  const renderCell = (params: any) => {
    if (params.row.id === editableRowId) {
      return (
        <input
          type="text"
          value={params.value}
          onChange={(event) =>
            handleEditarCampo(params.row.id, params.field, event.target.value)
          }
        />
      );
    }
    return params.value;
  };

  const renderAccionCell = (params: any) => {
    if (params.row.id === editableRowId) {
      return (
        <div>
          <Button onClick={handleGuardarEdicion}>Guardar</Button>
        </div>
      );
    }
    return (
      <div>
        <Button onClick={() => setEditableRowId(params.row.id)}>Editar</Button>
        <Button onClick={() => handleEliminarFila(params.row.id)}>
          Eliminar
        </Button>
      </div>
    );
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'nombre', headerName: 'Nombre', width: 106, renderCell },
    { field: 'Disponible', headerName: 'Disponible', width: 106, renderCell },
    { field: 'Direccion', headerName: 'Dirección', width: 106, renderCell },
    { field: 'Municipio', headerName: 'Municipio', width: 106, renderCell },
    { field: 'Estado', headerName: 'Estado', width: 106, renderCell },
    { field: 'Cuarentena', headerName: 'Cuarentena', width: 106, renderCell },
    { field: 'Area', headerName: 'Área', width: 100, renderCell },
    {
      field: 'AreaPropagacion',
      headerName: 'Área de Propagación',
      width: 196,
      renderCell,
    },
    {
      field: 'Accion',
      headerName: 'Acción',
      width: 126,
      renderCell: renderAccionCell,
    },
  ];

  return (
    <div style={{ height: 300, width: '99%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        getRowId={(row) => row.id}
      />
    </div>
  );
};

export default CustomDataGrid;