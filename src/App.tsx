import React from 'react';
import { FormProvider } from './contexts/ProgramContext';
import {Router} from './router';


function App(){
 
  return (
    <FormProvider>
        <Router />
    </FormProvider>
  );
};

export default App;

