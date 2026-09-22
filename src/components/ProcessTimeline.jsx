import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Wrench, CheckCircle2 } from 'lucide-react';

export default function ProcessTimeline() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 70%'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  const steps = [
    {
      id: 1,
      title: 'Diagnóstico & Inspección',
      description:
        'Escaneo computarizado del sistema eléctrico, revisión de compresión, frenos y estado general de la motocicleta.',
      icon: Search,
    },
    {
      id: 2,
      title: 'Mantenimiento & Ajuste',
      description:
        'Ejecución del servicio técnico, reemplazo de refacciones certificadas, calibración de motor y fluidos.',
      icon: Wrench,
    },
    {
      id: 3,
      title: 'Prueba & Entrega',
      description:
        'Verificación final en dinamómetro y ruta de prueba. Entrega con reporte digital y garantía de servicio.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section
      id="proceso"
      ref={containerRef}
      className="relative min-h-screen py-20 md:py-28 px-6 bg-moto-dark flex flex-col justify-center overflow-hidden border-t border-moto-border/20"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Encabezado */}
        <div className="mb-12 md:mb-20 text-center md:text-left">
          <span className="text-moto-orange text-xs font-mono uppercase tracking-widest px-3 py-1 bg-moto-card border border-moto-border/40 rounded-full">
            Proceso de Servicio
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase mt-4 text-white">
            ¿Cómo trabajamos <span className="text-moto-orange">tu Moto?</span>
          </h2>
          <p className="text-slate-400 mt-2 max-w-xl text-sm sm:text-base">
            Transparencia y precisión técnica en cada etapa del proceso mecánico.
          </p>
        </div>

        {/* Contenedor de la Línea de Tiempo */}
        <div className="relative mt-8 md:mt-12 pl-6 md:pl-0">

          {/* LÍNEA HORIZONTAL (Escritorio - md:) */}
          <div className="absolute top-5 left-0 w-full h-1 bg-moto-card rounded-full hidden md:block" />
          <motion.div
            style={{ scaleX: scaleProgress }}
            className="absolute top-5 left-0 w-full h-1 bg-gradient-to-r from-moto-orange via-orange-400 to-moto-cyan rounded-full origin-left hidden md:block shadow-[0_0_15px_#FF5500]"
          />

          {/* LÍNEA VERTICAL (Móvil - menor a md:) */}
          <div className="absolute top-2 left-2 w-1 h-full bg-moto-card rounded-full md:hidden" />
          <motion.div
            style={{ scaleY: scaleProgress }}
            className="absolute top-2 left-2 w-1 h-full bg-gradient-to-b from-moto-orange via-orange-400 to-moto-cyan rounded-full origin-top md:hidden shadow-[0_0_15px_#FF5500]"
          />

          {/* Pasos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const stepStart = idx * 0.25;
              const stepEnd = stepStart + 0.3;

              const opacity = useTransform(scrollYProgress, [stepStart, stepEnd], [0.1, 1]);
              const x = useTransform(scrollYProgress, [stepStart, stepEnd], [-30, 0]);

              const Icon = step.icon;

              return (
                <motion.div
                  key={step.id}
                  style={{ opacity, x }}
                  className="flex flex-col items-start bg-moto-card/90 p-6 rounded-xl border border-moto-border/40 backdrop-blur-sm shadow-xl"
                >
                  <div className="w-10 h-10 rounded-lg bg-moto-orange text-white font-extrabold flex items-center justify-center mb-6 shadow-[0_0_12px_rgba(255,85,0,0.5)]">
                    {step.id}
                  </div>

                  <div className="flex items-center gap-2 text-moto-cyan mb-2">
                    <Icon size={18} />
                    <span className="text-xs font-mono tracking-wider uppercase text-slate-400">
                      Fase 0{step.id}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
