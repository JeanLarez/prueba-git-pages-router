import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    transformReactjsx: true })], 
 base:"https://jeanlarez.github.io/prueba-git-pages-router/"
})

