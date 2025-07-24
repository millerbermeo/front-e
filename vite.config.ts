import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    host: '0.0.0.0',  // Para ser accesible desde cualquier dispositivo de la red
    port: 5173, // El puerto en desarrollo
    strictPort: true,  // Evita que cambie el puerto si 5173 ya está ocupado
  },
});