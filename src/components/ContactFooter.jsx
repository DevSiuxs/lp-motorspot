import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Phone, Clock, MessageSquare, Bike } from 'lucide-react';

export default function ContactFooter() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 90%', 'end 80%'],
  });

  const x = useTransform(scrollYProgress, [0, 0.4], [120, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <footer
      ref={sectionRef}
      className="relative py-20 px-6 bg-moto-dark border-t border-moto-border/30 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          style={{ x, opacity }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Columna Izquierda: Información de Contacto */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-moto-orange font-bold text-xl mb-4">
              <Bike className="w-6 h-6" />
              <span>MOTORSPOT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-white mb-6">
              ¿Listo para agendar <br />
              <span className="text-moto-orange">el servicio de tu Moto?</span>
            </h2>

            <div className="space-y-4 mb-8 text-slate-300 text-sm">
              <div className="flex items-center gap-3">
                <MapPin className="text-moto-cyan w-5 h-5 shrink-0" />
                <span>Av. Principal #123, Zona Industrial / Taller Mecánico</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-moto-cyan w-5 h-5 shrink-0" />
                <span>+52 55 1234 5678 / Atención inmediata</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="text-moto-cyan w-5 h-5 shrink-0" />
                <span>Lunes a Viernes: 9:00 AM - 7:00 PM | Sábados: 9:00 AM - 3:00 PM</span>
              </div>
            </div>

            <a
              href="https://wa.me/525512345678?text=Hola,%20me%20gustaría%20agendar%20un%20diagnóstico%20para%20mi%20motocicleta."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-moto-orange text-white font-bold rounded-xl hover:bg-orange-600 transition-all shadow-[0_0_25px_rgba(255,85,0,0.5)]"
            >
              <MessageSquare className="w-5 h-5" />
              Agendar Cita por WhatsApp
            </a>
          </div>

          {/* Columna Derecha: Tarjeta de Estado del Taller */}
          <div className="lg:col-span-5 bg-moto-card p-8 rounded-2xl border border-moto-border/50 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-moto-cyan/10 rounded-full blur-2xl" />

            <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-mono uppercase tracking-widest mb-4">
              ● Taller Abierto
            </span>

            <h3 className="text-xl font-bold text-white mb-2">
              Diagnóstico Express Disponible
            </h3>

            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Recibimos motocicletas sin previa cita para revisión rápida de niveles y scanner de falla.
            </p>

            <div className="p-4 bg-moto-dark/60 rounded-xl border border-moto-border/30 text-xs text-slate-400 font-mono">
              Atención personalizada y entrega de reporte fotográfico por WhatsApp.
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-moto-border/20 text-center text-xs text-slate-500 font-mono">
          © {new Date().getFullYear()} EDSON GAXIOLA HERNANDEZ. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
