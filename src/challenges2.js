// Desafio 11
function countRepeat(arr){
let counts = {};
(arr).forEach((count) => {
  counts[count] = (counts[count] || 0) +1;
});
  
const maxRepeat = Math.max(...Object.values(counts))

return maxRepeat 
}


function generatePhoneNumber(numeros) {
   
  for (let i= 0; i < 11; i++){

    if (numeros.length !== 11) {
      return 'Array com tamanho incorreto.';
    }
    else if (Math.max(...numeros) > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    } else if (Math.min(...numeros) < 0){
      return 'não é possível gerar um número de telefone com esses valores';
    } 
    else if (countRepeat(numeros) >= 3){
      return 'não é possível gerar um número de telefone com esses valores';
    }
     else {
       return '(' + numeros[0] + numeros[1] + ') ' + numeros[2] + numeros[3] + numeros[4] + numeros[5] + numeros[6] + '-' + numeros[7] + numeros[8] + numeros[9] + numeros[10]
    }
  } 
    
}




// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
const somaLadoAb = Math.abs(lineA + lineB); 
const somaLadoBc = Math.abs(lineB + lineC); 
const somaLadoCa = Math.abs(lineC + lineA);

const subLadoAb = Math.abs(lineB - lineA);
const subLadoBc = Math.abs(lineC - lineA);
const subLadoCa = Math.abs(lineC - lineB);

  if (lineA > somaLadoBc || lineB > somaLadoCa || lineC > somaLadoAb ){
  return false
  } else if (lineA < subLadoBc || lineB < subLadoCa || lineC < subLadoAb ){
  return false;
  } else {
  return true
  }

}


// Desafio 13
function hydrate(frase) {
  let reg = /\d+/g;
  let result = frase.match(reg);
    let arrNumberFraseSoma = 0;

  for (let i = 0; i<result.length; i++){
    arrNumberFraseSoma += Math.abs(result[i]);
  }
  if (arrNumberFraseSoma > 1) {
    return arrNumberFraseSoma + ' copos de água'
  } else  {
    return arrNumberFraseSoma + ' copo de água'
  }
  
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};