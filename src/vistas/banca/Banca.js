import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../lib/inicioSesion.js';
import flechaAccion from '../images/accionImg.svg';
import bancaImg from '../images/banca.svg';
import stori from '../images/Stori.svg';
import './Banca.css';
import axios from 'axios';


const baseDeDatos = 'http://localhost:3001/clientes'

export const Banca = () => {

    const navegacion = useNavigate();

        const salir = async () =>{
        await logOut()
            navegacion('/');
        }

    const [data, obtenerData] = useState([]);

    const edoDeCuenta = async () =>{
       await axios.get(baseDeDatos)
        .then(response=>{
            obtenerData(response.data);
        })
    }

    useEffect(()=>{
        edoDeCuenta();
    },[])

    return (
       <section className='banca'>
        <div className= 'acciones'>
            <button className='btnCerrarSesion' onClick={salir} >Cerrar Sesión</button>
        <div className='btnsAcciones'>
            <button className='btnAccion'><img src={flechaAccion} className='flechaIcon' alt='icono flecha'/>Pago de servicios</button>
            <button className='btnAccion'><img src={flechaAccion} className='flechaIcon' alt='icono flecha'/>Transferencias</button>
            <button className='btnAccion'><img src={flechaAccion} className='flechaIcon' alt='icono flecha'/>Tus cuentas</button>
            <button className='btnAccion'><img src={flechaAccion} className='flechaIcon' alt='icono flecha'/>Aclaraciones</button>
        </div>
            <img src={bancaImg} className='bancaImg' alt='tarjetas'/>
        </div>
        <img src={stori} className='storiBanca' alt='Logo stori'/>
        {data.map(clientes=>(
            <h3 key={clientes.id}>Bienvenido {clientes.nombre} {clientes.apellido_paterno} {clientes.apellido_materno}</h3>
        ))}
        
        <p>Tus finanzas</p>
        <div className='tablaInicio'>
            <h5>Fecha</h5>
            <h5>Descripción</h5>
            <h5>Cantidad MXP</h5>
        </div>
       {data.map(clientes=>(
        <div key={clientes.id} className='edoCuenta'>
            <h5>{clientes.credito.fecha}</h5>
            <h5>{clientes.credito.descripcion}</h5>
            <h5>{clientes.credito.monto}</h5>
        </div>
       ))}
       {data.map(clientes=>(
        <div key={clientes.id} className='edoCuenta'>
            <h5>{clientes.debito.fecha}</h5>
            <h5>{clientes.debito.descripcion}</h5>
            <h5>{clientes.debito.monto}</h5>
        </div>
       ))}
       {data.map(clientes=>(
        <div key={clientes.id} className='edoCuentaTotal'>
            <h5>Total de cargos: {clientes.credito.monto}</h5><br/>
            <h5>Crédito disponible: 5000.00</h5>
        </div>
       ))}
        <button className='btnEdoCuentaDes'>
            Descargar <br/>estado de cuenta</button>
        <button className='btnEdoCuenta'>
            Enviar por correo <br/>estado de cuenta</button>
            
        </section>
    )
}