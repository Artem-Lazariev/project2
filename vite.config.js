import { defineConfig } from 'vite'
import injectHTML from 'vite-plugin-html-inject'
import FullReload from 'vite-plugin-full-reload'

export default defineConfig({
  // Кажемо Vite, що вся робота йде всередині папки src
  root: 'src',

  build: {
    // Файли після збірки будуть складатися в папку dist на рівень вище
    outDir: '../dist',
    emptyOutDir: true,
  },

  plugins: [
    // Плагін для роботи <load src="..." /> (без аргументів всередині)
    injectHTML(),

    // Слідкує за абсолютно всіма HTML-файлами в папці src і перезапускає браузер
    FullReload(['src/**/*.html']),
  ],
})