const inputField = document.getElementById('carta-texto');
const misteryLetter = document.getElementById('carta-gerada');
const generateLetterBtn = document.getElementById('criar-carta');
const countLetter = document.getElementById('carta-contador');
const stylesGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizesGroup = ['medium', 'big', 'reallybig'];
const rotationGroup = ['rotateleft', 'rotateright'];
const skewsGroup = ['skewleft', 'skewsright'];

// Requisito 16 (incompleto): Adicionando classes de forma aleatória na carta.
function randomClass(classArray) {
  const randInt = Math.floor(Math.random() * (classArray.length + 1) - 1);
  return classArray[randInt];
}

function addClass(spanElement) {
  spanElement.classList.toggle(randomClass(stylesGroup));
  spanElement.classList.toggle(randomClass(sizesGroup));
  spanElement.classList.toggle(randomClass(rotationGroup));
  spanElement.classList.toggle(randomClass(skewsGroup));
  checkClasslist(spanElement);
}

function checkClasslist(spanElement) {
  while (spanElement.classList.contains(undefined)) {
    spanElement.classList.remove(undefined);
  }
  while (spanElement.classList.length < 2) {
    addClass(spanElement);
  }
}

// Requisito 17 (incompleto) - Ao clicar numa palavra, modifica o estilo da palavra.
function changeClass(event) {
  const spanWord = event.target;
  for (let wordClass of spanWord.classList) {
    spanWord.classList.remove(wordClass);
  }
  addClass(spanWord);
}

// Requisito 18 - contador de palavras
function countWords() {
  const spanList = misteryLetter.getElementsByTagName('span');
  const wordCount = spanList.length;
  countLetter.innerText = wordCount;
}

// Requisito 3 e 4 - Criação dinâmica da carta após clique no botão 'criar-carta' sem alteração posterior do conteúdo do 'input':

function displayLetter() {
  const inputPhrase = inputField.value;
  const inputWords = inputPhrase.split(' ');
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
    addClass(word);
    word.addEventListener('click', changeClass);
    misteryLetter.appendChild(word);
  }
  countWords();
}

generateLetterBtn.addEventListener('click', displayLetter);
inputField.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    displayLetter();
  }
});
