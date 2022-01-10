const inputField = document.getElementById('carta-texto');
const misteryLetter = document.getElementById('carta-gerada');
const generateLetterBtn = document.getElementById('criar-carta');
const countLetter = document.getElementById('carta-contador');
const classObject = {
  style: ['newspaper', 'magazine1', 'magazine2'],
  size: ['medium', 'big', 'reallybig'],
  rotation: ['rotateleft', 'rotateright'],
  skew: ['skewleft', 'skewright'],
};

// Requisito 16 - Adicionando classes de forma aleatória na carta.
function randomClass() {
  const classesList = [];
  for (const prop in classObject) {
    const randInt = Math.floor(Math.random() * classObject[prop].length);
    const element = classObject[prop][randInt];
    classesList.push(element);
  }
  const classes = classesList.join(' ');
  return classes;
}

function addClass(spanElement) {
  if (spanElement.classList.length > 0) {
    for (const singleClass of spanElement.classList) {
      spanElement.classList.remove(singleClass);
    }
  }
  spanElement.setAttribute('class', randomClass());
}

// Requisito 17 - Ao clicar numa palavra, modifica o estilo da palavra.
function changeClass(event) {
  const spanWord = event.target;
  for (const wordClass of spanWord.classList) {
    spanWord.classList.remove(wordClass);
  }
  spanWord.setAttribute('class', randomClass());
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
