import React, { useState, useEffect } from 'react';

function Letreiro() {
const texto = "Conheça a Fatec";
const [index, setIndex] = useState(0);

useEffect(() => {
    const intervalo = setInterval(() => {
    setIndex((prevIndex) => (prevIndex + 1) % (texto.length + 1));
    }, 200); 

    return () => clearInterval(intervalo);
}, []);

return (
    <div>
    <h2>Letreiro:</h2>
    <p>{texto.substring(0, index)}</p>
    </div>
);
}

export default Letreiro;
