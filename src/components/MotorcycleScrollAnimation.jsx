import React, { useState, useEffect, useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

// Arreglo con las rutas exactas de tus archivos .png (de la 2 a la 9)
const FRAME_IDS = [2, 3, 4, 5, 6, 7, 8, 9];
const TOTAL_FRAMES = FRAME_IDS.length;

const images = FRAME_IDS.map((id) => `/images/motorcycle/${id}.png`);

export default function MotorcycleScrollAnimation() {
  const containerRef = useRef(null);

  // Control del scroll vinculado a este contenedor
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Mapeo dinámico del progreso del scroll al rango de imágenes
  const progressValue = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = progressValue.on('change', (latest) => {
      setCurrentIndex(latest);
    });
    return () => unsubscribe();
  }, [progressValue]);

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-white text-gray-900">
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden">

        {/* Encabezado sobrepuesto */}
        <div className="absolute top-12 z-20 text-center px-4 pointer-events-none">
          <h2 className="text-3xl md:text-5xl font-black tracking-wider uppercase">
            Ingeniería en Movimiento
          </h2>
          <p className="text-gray-500 mt-1 text-xs md:text-sm">
            Desplaza hacia abajo para explorar el modelo 3D
          </p>
        </div>

        {/* Renderizado continuo con opacidad para suavizar la animación */}
        <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center">
          {images.map((src, index) => {
            const distance = Math.abs(currentIndex - index);
            const opacity = Math.max(0, 1 - distance);

            return (
              <motion.img
                key={src}
                src={src}
                alt={`Motorcycle Frame ${FRAME_IDS[index]}`}
                style={{ opacity }}
                className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none transition-opacity duration-75 ease-out"
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
