// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'


// export default defineConfig({
//   plugins: [react()],
// })



import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Ensure the dev server binds to 0.0.0.0
    port: 3000 // Or any port you prefer
  },
  build: {
    outDir: 'dist' // This is the default output directory
  }
});
