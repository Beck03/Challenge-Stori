import RutasPrivadas from "./RutasPrivadas"
import RutasPublicas  from "./RutasPublicas"
import React  from 'react';


const RutasApp = ({isAuth}) => {
  return (
    <>
      {
        isAuth ?
          <RutasPrivadas /> :
          <RutasPublicas />
      }
    </>
  )
}

export default RutasApp;