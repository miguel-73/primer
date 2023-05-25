import React from 'react';
import logo from './logo.svg';
import './App.css';
import BasicButtons from './limpiar/botones';
import TextFieldHiddenLabel from './limpiar/Otro';
import { FormProvider } from './context/useForm';
import CampoTres from './limpiar/CapoTres';
 
function App() {
  return (
    <>
    <FormProvider>
    <BasicButtons />
    <TextFieldHiddenLabel />
    <CampoTres/> 
    </FormProvider>
    </>
  );
}

export default App;
