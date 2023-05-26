import React from 'react';
import logo from './logo.svg';
import './App.css';
import BasicButtons from './limpiar/botones';
import TextFieldHiddenLabel from './limpiar/Otro';
import { FormProvider } from './context/useForm';
import CampoTres from './limpiar/CapoTres';
import Tablaeje from './limpiar/Tabla';
import BasicSelect from './limpiar/TexLis';
import Gridd from './limpiar/Gridd';
import { CRUD } from './Tabla';

function App() {
  return (
    <>


    
    <FormProvider>
    {/* <BasicButtons />
    <Otro />
    <CampoTres/> 
    <BasicSelect/> */}
    <Gridd/>
    <CRUD/>
    </FormProvider>





    {/* <Tablaeje/> */}
    </>
  );
}

export default App;
