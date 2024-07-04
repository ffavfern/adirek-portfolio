import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss'
import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcss,
    daisyui
  ],
  daisyui: {
    themes: ["light", "emerald"],
  },
})

