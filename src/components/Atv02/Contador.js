import React, { useState } from "react";
import { FaPlus, FaMinus, FaSyncAlt } from "react-icons/fa";
import "./Contador.css"

export default function Contador() {
    const [homens, setHomens] = useState(0);
    const [mulheres, setMulheres] = useState(0);

    const total = homens + mulheres;

    const resetar = () => {
        setHomens(0);
        setMulheres(0);
    };

    return (
        <div className="container">
    <h2>Total</h2>
    <div className="total-box">
        <span>{total}</span>
        <FaSyncAlt onClick={resetar} className="icon" />
    </div>

    <div className="painel">
        <div className="card">
        <img src="https://img.icons8.com/color/96/000000/user-male.png" alt="Homem" />
        <div>
            <button onClick={() => setHomens(homens + 1)} className="botao-mais"><FaPlus /></button>
            <button onClick={() => setHomens(Math.max(homens - 1, 0))} className="botao-menos"><FaMinus /></button>
        </div>
        <p>Homens</p>
        <div className="box-valor">{homens}</div>
        </div>

        <div className="card">
        <img src="https://img.icons8.com/color/96/000000/user-female.png" alt="Mulher" />
        <div>
            <button onClick={() => setMulheres(mulheres + 1)} className="botao-mais"><FaPlus /></button>
            <button onClick={() => setMulheres(Math.max(mulheres - 1, 0))} className="botao-menos"><FaMinus /></button>
        </div>
        <p>Mulheres</p>
        <div className="box-valor">{mulheres}</div>
        </div>
    </div>
    </div>

    )
}