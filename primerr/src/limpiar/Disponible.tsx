import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Disponible() {
  const [isOpen, setIsOpen] = useState(true); // Estado para controlar si está abierto o cerrado

  const handleClick = () => {
    setIsOpen(!isOpen); // Cambiar el estado cuando se hace clic en el botón
  };

  const buttonColor = isOpen ? 'green' : 'red'; // Color diferente según el estado

  return (
    <Stack direction="row" spacing={2}>
      <Button href="#text-buttons" onClick={handleClick} style={{ color: buttonColor }}>
        {isOpen ? 'activo' : 'inactivo'} {/* Mostrar 'abierto' o 'cerrado' según el estado */}
      </Button>
    </Stack>
  );
}
