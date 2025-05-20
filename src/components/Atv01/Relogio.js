import React, { useState, useEffect } from 'react';

function Relogio() {
const [hora, setHora] = useState(new Date());

useEffect(() => {
    const intervalo = setInterval(() => {
    setHora(new Date());
    }, 1000);

    return () => clearInterval(intervalo); // limpa o intervalo quando o componente for destruído
}, []);

return (
    <div>
    <h2>Relógio:</h2>
    <p>{hora.toLocaleTimeString()}</p>
    </div>
);
}

export default Relogio;
