import React from 'react';
import stori from '../images/Stori.svg'
import bancoDeMexico from '../images/bancoMexico.svg'
import buroDeCredito from '../images/buroCredito.svg'
import condusef from '../images/condusef.svg'
import masterCard from '../images/mastercard-2.svg'
import tarjetas from '../images/tarjetas.svg'
import './Login.css';
import { useState } from 'react';
import { signIn } from '../../lib/inicioSesion.js';
import { useNavigate } from 'react-router-dom';






export const Login = () =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navegacion = useNavigate();

    const handleEmail = e => {
        setEmail(e.target.value)
      };
      const handlePassword = e => {
        setPassword(e.target.value)
      };

      const access = async () => {
        const response = await signIn(email, password);
       
        
        if (response && response.hasOwnProperty('code')) {
          
          switch (response.code) {
            case "auth/invalid-email":
              setMessage("El correo es inválido");
              break;
            case "auth/user-not-found":
              setMessage("El correo no está registrado");
              break;
            case "auth/wrong-password":
              setMessage("La contraseña es inválida");
              break;
            default:
              setMessage(response.code);
          }
        } else{
          navegacion('/banca');
        }
       
      };


    return(
       <section className='login'>
        <div className='logo'>
            <img className='storiLogin' src={stori} alt='Stori'/>
            <img className='instituciones' src={masterCard} alt='Stori'/>
            <img className='instituciones1' src={bancoDeMexico} alt='Stori'/>
            <img className='instituciones1' src={condusef} alt='Stori'/>
            <img className='instituciones' src={buroDeCredito} alt='Stori'/>
        </div>
        <div className='datosIngreso'>
        <h5>Ingresa tu correo eletrónico y <br/> contraseña</h5>
                <input type='text' id='email' placeholder="Correo electrónico" onChange={handleEmail} />
                <input type='password' id='contraseña' placeholder="Contraseña"  onChange={handlePassword} />
                <p data-testid='errorMessage' className="p-login">{message} </p>
                <button className='btnOlvideContraseña'>Olvidaste tu contraseña</button>
                <button className='btnContinuar' onClick={access} >Continuar</button>
        </div>
        <img src={tarjetas} className='tarjetas' alt='Stori'/>
       </section>
    )
}