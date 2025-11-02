// babel.config.js - Конфигурация для React Compiler

module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'babel-plugin-react-compiler',
      {
        // ✅ Включаем React Compiler для всех компонентов
        compilationMode: 'all',
        // Опции оптимизации
        sources: (filename) => {
          // Компилируем все файлы в src/
          return filename.includes('src/');
        },
      },
    ],
  ],
};