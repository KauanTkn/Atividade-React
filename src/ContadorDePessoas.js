import React, { useState } from 'react';
import homemImg from './homem.png';
import mulherImg from './mulher.png';
import './ContadorDePessoas.css';

export default function ContadorPessoas() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  const total = homens + mulheres;

  const resetar = () => {
    setHomens(0);
    setMulheres(0);
  };

  const ContadorBox = ({ tipo, imgSrc, valor, setValor }) => (
    <div className="contador-box">
      <img src={imgSrc} alt={tipo} className="icone" />
      <h3>{tipo}</h3>
      <span className="contador">{valor}</span>
      <button onClick={() => setValor(valor + 1)} className="increment">+</button>
      <button
        onClick={() => setValor(valor > 0 ? valor - 1 : 0)}
        className="decrement"
      >-</button>
    </div>
  );

  return (
    <div id="contador-container">
      <h2>Contador de Pessoas</h2>

      <ContadorBox tipo="Homens" imgSrc={homemImg} valor={homens} setValor={setHomens} />
      <ContadorBox tipo="Mulheres" imgSrc={mulherImg} valor={mulheres} setValor={setMulheres} />

      <div>
        <h3>Total:</h3>
        <span id="total">{total}</span>
      </div>

      <button onClick={resetar} className="reset">Resetar</button>
    </div>
  );
}
