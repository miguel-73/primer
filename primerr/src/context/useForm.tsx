import React, { ReactNode, createContext, useState } from 'react';

// Crea el contexto
const FormContext: any = createContext<any>({});

// Crea el proveedor del contexto
export const FormProvider = ({ children }: any) => {
    const [campo1Value, setCampo1Value] = useState({
        value1: '',
        value2: "",
        value3: "",
    });

    const limpiarCampos = () => {
        setCampo1Value({
            ...campo1Value,
            value1: "",
            value2: "",
            value3: "",
        });
    };

    // Valores y funciones a compartir
    const contextValues: any = {
        campo1Value,
        setCampo1Value,
        limpiarCampos,
    };

    return (
        <FormContext.Provider value={contextValues}>
            {children}
        </FormContext.Provider>
    );
};

export default FormContext;
