/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        moto: {
          dark: "#0F172A",    // Fondo principal
          card: "#1E293B",    // Contenedores/Tarjetas
          orange: "#FF5500",  // Acento principal
          cyan: "#00E5FF",    // Acento secundario neón
          border: "#475569",  // Bordes metálicos
        }
      }
    },
  },
  plugins: [],
}
