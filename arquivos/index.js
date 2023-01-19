

let computerNumber
let userNumbers =  []



//Gerando um número Randomico

function init() {
 computerNumber =  Math.floor(Math.random () * 100 + 1 ) 
 console.log(computerNumber)
    
}

// Armazenado os numeros em uma array

function compareNumbers () {
  const userNumber = (document.getElementById('inputBox').value)//capturando os dados  e convertendo para number  os numeros na inputBox e  armazenando na variavel 
  userNumbers.push('  ' + userNumber)// adicionado os numeros na variavel array
  document.getElementById('guesses').innerHTML = userNumbers // retornando os numeros na caixa guesses

}

