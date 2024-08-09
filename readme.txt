Instrucciones de Configuración
- Clonar Repositorio/: git clone https://github.com/nicolasortiz1995/swaglabs-cypress-js-bdd.git
- Instalar Dependencias/: npm install
- Ejecutar la GUI de Cypress/: npm run cypress:open
- Ejecutar Pruebas de Cypress/:
    - Todas las pruebas: npm run cypress:run-all
    - Pruebas de regresión: npm run cypress:regression-tag
    - Pruebas de humo: npm run cypress:smoke-tag

### Scripts de ejecución
"scripts": {
  "cypress:open": "cypress open", // Abrir consola Cypress
  "cypress:runner": "cypress open --e2e --browser chrome", // Ejecución por consola con navegador Chrome por defecto
  "cypress:run-all": "cypress run --reporter mochawesome && npm run merge-reports", // Ejecutar todos los test en general generando reporte
  "cypress:regression-tag": "cypress run --env tags=@regression --reporter mochawesome && npm run merge-reports", // Ejecutar solo el tag 'regression'
  "cypress:smoke-tag": "cypress run --env tags=@smoke --reporter mochawesome && npm run merge-reports", // Ejecutar solo el tag 'smoke'
  "merge-reports": "mochawesome-merge cypress/report/mochawesome-report/.json > cypress/report/output.json && marge cypress/report/output.json --reportDir ./ --inline" // Combinar reportes
}