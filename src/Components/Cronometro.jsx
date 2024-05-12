import React, { useState, useEffect } from 'react';
import './Computador.css'

function Cronometro() {
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);
  const [iniciado, setIniciado] = useState(false);
  useEffect(() => {
    let intervalo;
    if (iniciado) {
      intervalo = setInterval(() => {
        setSegundos((segundos) => segundos + 1);
      }, 1000);
    } else {
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [iniciado]);
  const iniciarCronometro = () => {
    setIniciado(true);
  };
  const pausarCronometro = () => {
    setIniciado(false);
  };
  const zerarCronometro = () => {
    setSegundos(0);
    setMinutos(0);
    setHoras(0);
    setIniciado(false);
  };

  useEffect(() => {
    // transformando 60 segundos em 1 minuto
    if (segundos === 60) {
      setSegundos(0);
      setMinutos(minutos + 1);
    }
    // transformando 60 minutos em 1 hora
    if (minutos === 60) {
      setMinutos(0);
      setHoras(horas + 1);
    }
  }, [segundos, minutos, horas]);
  return (
    <div className='container'>
      <h2>Cronômetro</h2>
      <div className='cronometro'>
        <span>{horas < 10 ? `0${horas}` : horas}</span> :
        <span>{minutos < 10 ? `0${minutos}` : minutos}</span> :
        <span>{segundos < 10 ? `0${segundos}` : segundos}</span>
      </div>
      <div className='buttons'>
        {!iniciado ? (
          <button onClick={iniciarCronometro}>Iniciar</button>
        ) : (
          <button onClick={pausarCronometro}>Pausar</button>
        )}
        <button onClick={zerarCronometro}>Zerar</button>
      </div>
    </div>
  );
}

export default Cronometro; 