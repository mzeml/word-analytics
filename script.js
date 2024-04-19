const textareaEl = document.querySelector('.textarea');
const charsNumberEl = document.querySelector('.stat__number--characters');
const numberOfWordsEl = document.querySelector('.stat__number--words');
const csNameTagNumEl = document.querySelector('.stat__number--csnametag');
const facebookNumEl = document.querySelector('.stat__number--facebook');

textareaEl.addEventListener('input', () => {
  if (textareaEl.value.includes('<script>')) {
    alert('Nice try! Invalid text detected. Purging...');
    textareaEl.value = textareaEl.value.replace('<script>', '');
  }
  const numOfChars = textareaEl.value.length;
  const userText = textareaEl.value;
  charsNumberEl.textContent = numOfChars;

  calcFacebookCharNum(numOfChars);
  calcCSNameTagCarNum(numOfChars);
  calcNumOfWords(userText);
});

const calcFacebookCharNum = (numOfChars) => {
  const facebookCharsLeft = 2200 - numOfChars;
  facebookNumEl.textContent = facebookCharsLeft;

  if (facebookCharsLeft < 0) {
    facebookNumEl.classList.add('stat__number--limit');
  } else {
    facebookNumEl.classList.remove('stat__number--limit');
  }
};

const calcCSNameTagCarNum = (numOfChars) => {
  const csNameCharsLeft = 20 - numOfChars;
  csNameTagNumEl.textContent = csNameCharsLeft;

  if (csNameCharsLeft < 0) {
    csNameTagNumEl.classList.add('stat__number--limit');
  } else {
    csNameTagNumEl.classList.remove('stat__number--limit');
  }
};

// This is much cleaner (still could be better)
const calcNumOfWords = (userText) => {
  let numOfWords = userText.split(' ').length;
  if (textareaEl.value.length === 0) {
    numOfWords = 0;
  }

  numberOfWordsEl.textContent = numOfWords;
};

// My initial solution before proceeding with the guide, but I know there's a better way to do it
// const calcNumOfWords = (userText) => {
//   let numOfSpaces = 0;
//   for (let index = 0; index < userText.length; index++) {
//     if (userText[index] === ' ') {
//       ++numOfSpaces;
//     }
//   }
//   const numOfWords = numOfSpaces + 1;
//   numberOfWordsEl.textContent = numOfWords;
// };
