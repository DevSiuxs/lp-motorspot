import React, { useState } from 'react';
import Loader from './components/Loader';
import HeroPromo from './components/HeroPromo';
import ProcessTimeline from './components/ProcessTimeline';
import MotorcycleScrollAnimation from "./components/MotorcycleScrollAnimation";
import TechSpecs from './components/TechSpecs';
import ContactFooter from './components/ContactFooter';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="min-h-screen bg-moto-dark text-white relative">
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {!loading && (
        <>
          <HeroPromo />
          <MotorcycleScrollAnimation />
          <ProcessTimeline />
          <TechSpecs />
          <ContactFooter />
        </>
      )}
    </main>
  );
}
