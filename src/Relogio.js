import React, { useState, useEffect } from 'react';
// import './relogio.css';

export default function Relogio() {
    const [horaAtual, setHoraAtual] = useState('');

    useEffect(() => {
        const attRelogio = () => {
          const agora = new Date();
          const horas = String(agora.getHours()).padStart(2, '0');
          const minutos = String(agora.getMinutes()).padStart(2, '0');
          const segundos = String(agora.getSeconds()).padStart(2, '0');
          setHoraAtual(`${horas}:${minutos}:${segundos}`);
        };
    
        attRelogio();
        const intervalo = setInterval(attRelogio, 1000);
    
        return () => clearInterval(intervalo);
      }, []);
    
      return (
        <div className="relogio-container">
          <h1>Relógio</h1>
          <p>Meu Relógio</p>
          <div className="hora">
            {horaAtual}
          </div>
        </div>
      );
}