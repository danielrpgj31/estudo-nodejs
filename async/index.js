// Função que retorna uma Promise
function retornaNumeroAleatorio() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const numeroAleatorio = Math.floor(Math.random() * 100);
      if (numeroAleatorio % 2 === 0) {
        resolve(numeroAleatorio);
      } else {
        reject("Número ímpar encontrado.");
      }
    }, 5000);
  });
}

// Função assíncrona que trata a Promise com async/await
async function tratarNumeroAleatorio() {
  try {
    console.log("Finding..");
    const numero = await retornaNumeroAleatorio();
    console.log(`Número aleatório gerado: ${numero}`);
  } catch (erro) {
    console.error(`Erro: ${erro}`);
  }
}

console.log("Inicio..");

tratarNumeroAleatorio()
  .then(() => {
    console.log("fim");
  })
  .catch(() => {
    console.log("erro");
  });
