const arr = [1, 2, 3, 4, 5];

function procesarElemento(elemento, callback) {
  setTimeout(() => {
    const resultado = elemento * 2; // Simula un procesamiento
    callback(resultado);
  }, 1000);
} 
function procesarArray(array, callback) {
  const resultados = [];
  let elementosProcesados = 0;
  array.forEach((elemento, index) => {
    procesarElemento(elemento, (resultado) => {
      resultados[index] = resultado;  
      elementosProcesados++;
      if (elementosProcesados === array.length) {
        callback(resultados);
      } 
    });
  });
}
procesarArray(arr, (resultados) => {
  console.log('Array procesado:', resultados);
});
