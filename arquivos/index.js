

let computerNumber
let userNumbers =  []
let attemps = 0
let maxguesses = 10


// função para habilitar o botão New Game 
function newGame() {
  window.location.reload('newGameButton')


}
  



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

   // Adicionando if / else
  // Fazendo a logica de comparação

  if( userNumber < 101) {// condição para numeros acima do estipulado para jogar , jogo trabalha ente 0 a 100

    
  if(  attemps < maxguesses ) {// condição de numero de tentativas 


    
    if( userNumber > computerNumber) {
        document.getElementById('textOutput').innerHTML = 'Number is too Hight'
        document.getElementById('inputBox').value = ' ' // esvaziando um campo 
        attemps++// incremento para variavel contadora 
        document.getElementById('attempts').innerHTML = attemps// inserindo resultado no html


    }

    else if( userNumber < computerNumber)  {
        document.getElementById('textOutput').innerHTML = ' Number is too  Low '//inserindo resultado no html
        document.getElementById('inputBox').value = ' ' // esvaziando um campo
        attemps++ 
        document.getElementById('attempts').innerHTML = attemps//inserindo resultado no html



    }

    else {
        document.getElementById('textOutput').innerHTML = 'HALLLL ****Congratulations ****'
        attemps++
        document.getElementById('attempts').innerHTML = attemps//inserindo resultado no html
        document.getElementById('inputBox').setAttribute('Readonly','Readonly')// desabilitando o campo após tentativas

        

    }

  } else {

    document.getElementById('textOutput').innerHTML = ' You Lose!!!!!  The computer number was' + computerNumber///inserindo resultado no html
    document.getElementById('inputBox').setAttribute('Readonly','Readonly')//desabilitando o campo após tentativas

        

  } 

  } else {
    document.getElementById('textOutput').innerHTML = ' Error *Número acima do permitido* - Tente novamente'

  }




}






