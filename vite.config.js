import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isDev = command === 'serve'
  const isBuild = command === 'build'

  return {
    plugins: [react(), tailwindcss()],
    base: isBuild ?  '/' : '/deepa-bandari-porfolio/',
    build: {
      minify: isBuild ? 'esbuild' : false,   // minify in build, not in dev
    },
  }
})
