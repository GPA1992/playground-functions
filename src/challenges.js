// Desafio 1
function compareTrue(a, b) {
    if(a === true && b === true){
      return true
    }
    else{
      return false
    }
}
// Desafio 2
function calcArea(b, a) {
  let base = b;
  let altura = a;
  return base * altura / 2
}
// Desafio 3
function splitSentence(frase) {
  
  const array = frase.split(" ");
  return array
}
// Desafio 4
function concatName(frase) {
  const listaVazia = [];
  const lista = listaVazia.concat(frase);
  const ultimoItem = lista.slice (-1) [0];
  const primeiroItem = lista.slice (0) [0];
  const ultimoPrimeiro = ultimoItem +', '+ primeiroItem;
  return ultimoPrimeiro
}

// Desafio 5
function footballPoints(wins, ties) {
  const pontos = wins * 3 + ties;
  return pontos
}

// Desafio 6
function highestCount(lista){
  let arrayVazia = [];
  let listaConcat = arrayVazia.concat(lista);
  var maiorValor = Math.max(...listaConcat);
  let contador = 0;

  for (let i = 0; i < listaConcat.length; i++){
    if (listaConcat[i] === maiorValor) contador++
  }
  
return contador
 
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2,) {
  let cat1ToMouse = Math.abs(mouse - cat1);
  let cat2ToMouse = Math.abs(mouse - cat2);
 
  if(cat1ToMouse < cat2ToMouse){
        return 'cat1';
  } 
  else if (cat2ToMouse < cat1ToMouse){
        return 'cat2'
  } 
  else {
        return 'os gatos trombam e o rato foge'
  }

}

// Desafio 8
function fizzBuzz(numeros) {
  const arrayPreenchido = numeros;
  let arrayRetorno = [];
  
  for (let i = 0; i < numeros.length; i++){
    if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
        arrayRetorno.push('fizzBuzz');
    } else if (numeros[i] % 5 === 0 ){
        arrayRetorno.push('buzz');
    } else if (numeros[i] % 3 === 0){
        arrayRetorno.push('fizz');
    } else {
        arrayRetorno.push('bug!');
    }
  }

  return arrayRetorno
}

// Desafio 9
function encode(frase) {
 let textoCodificado1 = frase.replace(/a/g, 1).replace(/e/g, 2).replace(/i/g, 3).replace(/o/g, 4).replace(/u/g, 5);
 return textoCodificado1
}

function decode(frase2) {
  let textoCodificado2 = frase2.replace(/1/g, `a`).replace(/2/g, `e`).replace(/3/g, `i`).replace(/4/g, `o`).replace(/5/g, `u`);

  return textoCodificado2
}



// Desafio 10
function techList(tlist, nome) {
  var arrayRetorno = [];
  var arraylista = tlist.sort();
  
  for (let i = 0; i < arraylista.length; i++){
         arrayRetorno.push({
         tech: arraylista[i],
         name: nome,});}
 if (arrayRetorno.length === 0 ){
        return 'Vazio!'
 } else { 
return arrayRetorno;
 }

}


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
