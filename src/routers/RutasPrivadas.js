import React from 'react';
import { Routes, Route  } from 'react-router-dom';
import { Banca } from '../vistas/banca/Banca';



function RutasPrivadas() {
    return (
      <Routes>
    
          <Route path='/banca' element={<Banca/>} />
         {/* <Route path='/*' element={<Error404/>} />*/}
        </Routes>
    );
  }
  
  export default RutasPrivadas;