import React from 'react';
import stori from '../images/Stori.svg' 
import home from '../images/home.png'  
import candado from '../images/candado.svg'
import './home.css';
import { useNavigate } from 'react-router-dom';



export const Home = () =>{

  const navegacion = useNavigate();
    
    const ingresar = (e) => {
        e.preventDefault()
        navegacion('/Login')
    }

    return(
        <section className='home'>
          <nav>
          <img src={stori} alt='Stori' className='stori'/>
          <button className='btnNav'>Somos Stori</button>
          <button className='btnNav'>Trabaja en Stori</button>
          <button className='btnNav'>Preguntas frecuentes</button>
          <button className='btnNav'>Pago de servicios</button>
          <button className='btnNav'>Blog</button>
          <button className='btnIngresar' onClick={ingresar} ><img src={candado} className='candado' alt='icono candado'/>Ingresar</button>
          </nav>
          <section className='solicitar'>
             <img src={home} className='homeImg' alt='stori'/>
             <h3>La tarjeta de crédito <br/>
              con 100% de aprobación</h3>
             <div className='tarjeta'>
                <h5>Pide la tuya en minutos</h5>
                <input type='email' id='titulo' placeholder="Correo electrónico" />
                <button className='btnSolicitar'>Solicita tu tarjeta</button>
                <p>Al ingresar tu correo electrónico,<br/> aceptas nuestro <button>Aviso de Privacidad</button></p>
             </div>

          </section>
        </section>
    )
}