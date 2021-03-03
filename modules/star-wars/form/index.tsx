import React from 'react';
import FormBLContextProvider from '@md-star-wars/form/layers/businnes';
import FormPresentation from './layers/presentation';

const FormContainer = () => {
  return (
    <FormBLContextProvider>
      <FormPresentation />
    </FormBLContextProvider>
  );
};

export default FormContainer;
