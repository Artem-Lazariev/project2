import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  // Вказуємо, що головна папка з HTML — це src
  root: 'src',

  plugins: [
    injectHTML(),
    FullReload(['./**/*.html'])
  ],
  build: {
    // Оскільки ми змінили root, вказуємо, куди збирати готовий проєкт
    outDir: '../dist',
  }
});