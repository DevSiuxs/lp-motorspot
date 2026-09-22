import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Flame, Shield, Compass, Zap, Gauge } from 'lucide-react';

export default function TechSpecs() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 85%', 'end 65%'],
  });

  const categories = [
    {
      title: 'Deportivas & Superbike',
      desc: 'Optimización de ECU, ajuste de suspensiones para pista y calibración de frenado de alto rendimiento.',
      icon: Flame,
      tag: '600cc - 1000cc+',
    },
    {
      title: 'Custom & Choppers',
      desc: 'Mantenimiento especializado a motores en V, carburación fina y acabados mecánicos de exhibición.',
      icon: Shield,
      tag: 'V-Twin / Clásicas',
    },
    {
      title: 'Adventure & Touring',
      desc: 'Preparación para rutas largas, diagnóstico de sistemas ABS avanzados y reforzamiento de chasis.',
      icon: Compass,
      tag: 'Trail / Maxi-Trail',
    },
    {
      title: 'Naked & Urbanas',
      desc: 'Mantenimiento preventivo ágil para el uso diario, embragues, frenos y afinación electrónica.',
      icon: Zap,
      tag: '125cc - 900cc',
    },
    {
      title: 'Scooters & Maxiscooters',
      desc: 'Servicio al sistema variador CVT, transmisión automática y componentes eléctricos de ciudad.',
      icon: Gauge,
      tag: 'Movilidad Urbana',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-24 px-6 bg-moto-dark border-t border-moto-border/20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Encabezado desplazándose de derecha a izquierda */}
        <motion.div
          style={{
            x: useTransform(scrollYProgress, [0, 0.3], [120, 0]),
            opacity: useTransform(scrollYProgress, [0, 0.3], [0, 1]),
          }}
          className="mb-16 text-right"
        >
          <span className="text-moto-orange text-xs font-mono uppercase tracking-widest px-3 py-1 bg-moto-card border border-moto-border/40 rounded-full">
            Cobertura Multimarca
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase mt-4 text-white">
            Especialistas en <span className="text-moto-cyan">Todo Tipo de Motos</span>
          </h2>
          <p className="text-slate-400 mt-2 max-w-lg ml-auto text-sm sm:text-base">
            Herramientas de diagnóstico especializadas y manuales de fábrica para cada segmento.
          </p>
        </motion.div>

        {/* Tarjetas deslizándose de derecha a izquierda */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const startRange = 0.1 + idx * 0.08;
            const endRange = Math.min(startRange + 0.25, 1);

            const x = useTransform(scrollYProgress, [startRange, endRange], [140, 0]);
            const opacity = useTransform(scrollYProgress, [startRange, endRange], [0, 1]);

            const Icon = cat.icon;

            return (
              <motion.div
                key={idx}
                style={{ x, opacity }}
                className="bg-moto-card/90 border border-moto-border/40 p-6 rounded-xl hover:border-moto-cyan transition-all group backdrop-blur-sm shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-moto-dark flex items-center justify-center text-moto-cyan border border-moto-border/30 group-hover:bg-moto-cyan group-hover:text-moto-dark transition-colors">
                    <Icon size={24} />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-moto-dark/80 text-moto-orange border border-moto-border/30">
                    {cat.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-moto-cyan transition-colors">
                  {cat.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {cat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
