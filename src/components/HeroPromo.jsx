import React from 'react';
import { Wrench, ShieldCheck, Cpu, Gauge, Compass, Zap } from 'lucide-react';

export default function HeroPromo() {
  const cards = [
    { title: 'Diagnóstico Avanzado', subtitle: 'Scanner Multimarca', icon: Cpu, accent: 'border-moto-orange' },
    { title: 'Motores & Potencia', subtitle: 'Ajuste de Alto Rendimiento', icon: Gauge, accent: 'border-moto-cyan' },
    { title: 'Mantenimiento Preventivo', subtitle: 'Servicio Mecánico Integral', icon: Wrench, accent: 'border-moto-orange' },
    { title: 'Sistemas de Frenado', subtitle: 'Seguridad Certificada', icon: ShieldCheck, accent: 'border-moto-cyan' },
    { title: 'Suspensión & Chasis', subtitle: 'Alineación de Calidad', icon: Compass, accent: 'border-moto-orange' },
    { title: 'Inyección Electrónica', subtitle: 'Calibración ECU', icon: Zap, accent: 'border-moto-cyan' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20 bg-moto-dark">
      {/* Luz de fondo ambiental */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-moto-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-moto-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">

        {/* Columna Izquierda: Tipografía principal */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-moto-card border border-moto-border/40 text-moto-orange text-xs font-mono uppercase tracking-widest mb-6 w-fit">
            <span>●</span> Taller Especializado
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight uppercase leading-none text-white">
            Motor <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-moto-orange to-orange-400">
              Sport
            </span>
          </h1>

          <p className="mt-6 text-slate-400 text-lg max-w-md leading-relaxed">
            Ingeniería y precisión mecánica para todo tipo de motocicletas. Innovación tecnológica y cuidado experto en cada detalle.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="#proceso"
              className="px-6 py-3 bg-moto-orange text-white font-bold rounded-lg hover:bg-orange-600 transition-all shadow-[0_0_20px_rgba(255,85,0,0.4)]"
            >
              Ver Servicios
            </a>
          </div>
        </div>

        {/* Columna Derecha: Grilla interactiva en Perspectiva 3D */}
        <div className="lg:col-span-7 perspective-1000">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 transform rotate-y-[-12deg] rotate-x-[8deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out">
            {cards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div
                  key={idx}
                  className={`group relative bg-moto-card/80 backdrop-blur-md p-6 rounded-xl border border-moto-border/50 hover:${card.accent} hover:scale-105 transition-all duration-300 shadow-xl cursor-pointer overflow-hidden`}
                >
                  <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-15 transition-opacity text-white">
                    <IconComp size={100} />
                  </div>

                  <div className="w-10 h-10 rounded-lg bg-moto-dark/60 flex items-center justify-center border border-moto-border/30 text-moto-orange group-hover:text-moto-cyan transition-colors mb-4">
                    <IconComp size={20} />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-moto-orange transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-mono">
                    {card.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
