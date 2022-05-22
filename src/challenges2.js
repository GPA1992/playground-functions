// Desafio 11 Implemente a função generatePhoneNumber que recebe um array com 11 números e retorna um número de telefone, respeitando parênteses, traços e espaços.

//Retorne a string 'Array com tamanho incorreto.' caso o array tenha o tamanho diferente de 11;
//Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum dos números do array seja menor que 0;
//Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número do array seja maior que 9;
//Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número do array se repetir 3 vezes ou mais;
//Retorne um número de telefone, respeitando parênteses, traços e espaços caso os números do array estejam de acordo com as especificações.

function generatePhoneNumber(arr) {

for (let i = 0; i < arr.length; i++){
  const arrTam = arr.length;
  if (arrTam !== 11){
    return 'Array com tamanho incorreto.';
  }
  else if(arr.filter(x => x === arr[i]) < 3 === true ){
    return 'não é possível gerar um número de telefone com esses valores3';
  }
  else if (Math.max(...arr) > 9) {
  return 'não é possível gerar um número de telefone com esses valores';
  }
  else if (Math.min(...arr) < 0){
  return 'não é possível gerar um número de telefone com esses valores';
  }
  else {
  return '('+ arr[0]+ arr[1] + ') '+ arr[2] + arr[3] + arr[4] + arr[5] + arr[6]+'-'+ arr[7] + arr[8] + arr[9] + arr[10]
  } 

  }
}


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
