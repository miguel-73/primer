import React from 'react';
import logo from './logo.svg';
import './App.css';
import BasicButtons from './limpiar/botones';
import TextFieldHiddenLabel from './limpiar/Otro';
import { FormProvider } from './context/useForm';
import CampoTres from './limpiar/CapoTres';
import Tablaeje from './limpiar/Tabla';
import BasicSelect from './limpiar/TexLis';
  
function App() {
  return (
    <>


    
    <FormProvider>
    <BasicButtons />
    <TextFieldHiddenLabel />
    <CampoTres/> 
    <BasicSelect/>
    </FormProvider>





    <Tablaeje/>
    </>
  );
}

export default App;
