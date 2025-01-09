const fs = require('fs');
const path = require('path');

// Directorio donde están los archivos transpilados
const distDir = path.join(__dirname, 'dist');

// Expresión regular para identificar rutas absolutas del tipo 'src/...'
const absolutePathRegex = /from ['"]src\/(.*?)['"]/g;

// Función para convertir rutas absolutas a relativas
function convertToRelative(importPath) {
  return importPath.replace(absolutePathRegex, (match, p1) => {
    return `from './${p1}'`;
  });
}

// Recorrer recursivamente todos los archivos del directorio dist
function processFiles(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Si es un directorio, procesar recursivamente
      processFiles(filePath);
    } else if (file.endsWith('.js')) {
      // Si es un archivo .js, leer y modificar el contenido
      let content = fs.readFileSync(filePath, 'utf-8');
      const updatedContent = convertToRelative(content);

      if (content !== updatedContent) {
        fs.writeFileSync(filePath, updatedContent, 'utf-8');
        console.log(`Rutas actualizadas en: ${filePath}`);
      }
    }
  });
}

console.log('Iniciando corrección de rutas en el dist...');
processFiles(distDir);
console.log('Corrección de rutas completada.');
