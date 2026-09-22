import React, { useEffect, useState } from 'react';
import { Bike } from 'lucide-react';

export default function Loader({ onFinish }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Inicia el desvanecimiento justo antes de los 3s
    const timerFade = setTimeout(() => {
      setFading(true);
    }, 2700);

    // Oculta el loader por completo a los 3s
    const timerFinish = setTimeout(() => {
      if (onFinish) onFinish();
    }, 3000);

    return () => {
      clearTimeout(timerFade);
      clearTimeout(timerFinish);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-moto-dark transition-opacity duration-300 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="w-80 max-w-[80vw] flex flex-col items-center">
        {/* Título de carga / Taller */}
        <div className="flex items-center gap-2 mb-8 tracking-wider font-extrabold text-xl text-white">
          <span className="text-moto-orange">MOTORSPOT</span>
          <span className="text-slate-500">|</span>
          <span className="text-xs text-slate-400 uppercase tracking-widest">Taller Técnico</span>
        </div>

        {/* Pista y Motocicleta animada */}
        <div className="relative w-full h-12 flex items-end">
          {/* Contenedor animado que avanza de 0 a 100% */}
          <div className="absolute left-0 bottom-3 w-full animate-bike flex items-center justify-end -ml-4">
            <Bike className="w-8 h-8 text-moto-orange drop-shadow-[0_0_10px_#FF5500]" />
          </div>

          {/* Linea base de la barra */}
          <div className="w-full h-1.5 bg-moto-card rounded-full overflow-hidden border border-moto-border/30">
            {/* Relleno de la barra alineado con la animacion */}
            <div className="h-full bg-gradient-to-r from-moto-orange via-orange-400 to-moto-cyan animate-bike w-full origin-left" />
          </div>
        </div>

        <p className="mt-4 text-xs tracking-widest text-slate-400 uppercase font-mono animate-pulse">
          Cargando Sistemas...
        </p>
      </div>
    </div>
  );
}
