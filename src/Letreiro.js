import React, { useState, useEffect } from 'react';
// import './letreiro.css';

export default function Letreiro() {
    const textoCompleto = "Venha estudar na Fatec";
    const [textoAtual, setTextoAtual] = useState("");
    const [indice, setIndice] = useState(0);

    useEffect(() => {
      if (indice < textoCompleto.length) {
        const timeout = setTimeout(() => {
          setTextoAtual((prev) => prev + textoCompleto[indice]);
          setIndice((prev) => prev + 1);
        }, 150);

        return () => clearTimeout(timeout);
      }
    }, [indice]);

    return (
        <div className = "Letreiro">
            <h1>Letreiro</h1>
            <p>Meu letreiro</p>
            {textoAtual}
        </div>
    );
}