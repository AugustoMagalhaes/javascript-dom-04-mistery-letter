const inputField = document.getElementById('carta-texto');
const misteryLetter = document.getElementById('carta-gerada');
const generateLetterBtn = document.getElementById('criar-carta');

// Requisito 3 e 4 - Criação dinâmica da carta após clique no botão 'criar-carta' sem alteração posterior do conteúdo do 'input':

function displayLetter() {
  const inputPhrase = inputField.value;
  const inputWords = inputPhrase.split(' ');
  console.log(inputWords);
  misteryLetter.innerText = '';
  
  for (let index = 0; index < inputWords.length; index += 1) {
    const word = document.createElement('span');
    // Requisito 5: Caso o campo seja vazio ou somente com espaços vazios, deve ser gerada a frase abaixo:
    if (inputPhrase.trim().length === 0) {
      word.innerText = 'Por favor, digite o conteúdo da carta.';
      misteryLetter.appendChild(word);
      return;
    }
    word.innerText = inputWords[index];
    misteryLetter.appendChild(word);
  }
}

generateLetterBtn.addEventListener('click', displayLetter);
inputField.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    displayLetter();
  }
});