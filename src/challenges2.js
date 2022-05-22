// Desafio 11 
function generatePhoneNumber(numeros) {
var numArr = [];
const lista = numArr.concat(numeros);

for (let i = 0; i < lista.length; i++){
  
  if (lista.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  else if(lista.filter(x => x === lista[i]) <= 3 === true ){
    return 'não é possível gerar um número de telefone com esses valores3';
  }
  else if (Math.max(...lista) > 9 || Math.min(...lista) < 0) {
  return 'não é possível gerar um número de telefone com esses valores';
  }
  else {
  return '('+ lista[0]+ lista[1] + ') '+ lista[2] + lista[3] + lista[4] + lista[5] + lista[6]+'-'+ lista[7] + lista[8] + lista[9] + lista[10]
  } 

  }
}

console.log(generatePhoneNumber([1, 2, 8, 0, 5, 3, 7, 8, 8, 1, 9]));

// Desafio 12
function triangleCheck(lineA, libeB, lineC) {
 
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
