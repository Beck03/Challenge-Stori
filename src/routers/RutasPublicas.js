import React from 'react';
import { Routes, Route  } from 'react-router-dom';
import { Home } from '../vistas/home/Home';
import { Login } from '../vistas/login/Login';



function RutasPublicas() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Login' element={<Login />} />
       {/* <Route path='/*' element={<Error404/>} />*/}
      </Routes>
  );
}

export default RutasPublicas;
