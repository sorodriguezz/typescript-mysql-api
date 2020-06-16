# Proyecto TypeScript y MySQL
API simple codificada con Typescript junto a una base de datos MySQL.

- [Ejecutar proyecto](#ejecutar-proyecto).

### Ejecutar proyecto

  - Para ejecutar el proyecto con TypeScript se necesita un compilador de este, el cual es `ts-node`. En este proyecto
  se ejecuta con: 
  <code>$ npm run dev</code>
  
  - Para construir el proyecto y levantar en produccion se debe ejecutar:
  <code>$ npm run build</code>
  Usando las configuraciones del archivo `tsconfig.json`
  
  - **Antes de toda la ejecución del proyecto, se debe tener mysql corriendo y con la correcta configuracion en el archivo `database.ts`.
  **una vez listo cre una base de datos de forma manual con lo que contiene el archivo `database.sql`.
  
  - **Para ejecutar los archivos en `/dist` se usa `node index.js` 
