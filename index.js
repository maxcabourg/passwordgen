const fillArrayFromLowToHigh = (low, high) => {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

const generatePassword = (charNumbers, includeUppercase, includeNumbers, includeSymbols) => {
  let charCodes = lowercaseCodes;
  if (includeNumbers) {
    charCodes = [...charCodes, ...numberCodes];
  }
  if (includeUppercase) {
    charCodes = [...charCodes, ...uppercaseCodes];
  }
  if (includeSymbols) {
    charCodes = [...charCodes, ...symbolCodes];
  }

  const password = [];
  for (let i = 0; i < charNumbers; i++) {
    const index = getRandomNumber(charCodes.length);
    password.push(String.fromCharCode(charCodes[index]));
  }
  return password.join('');
}

const getRandomNumber = limit => {
  return Math.floor(Math.random() * limit);
}

const lowercaseCodes = fillArrayFromLowToHigh(97, 122);
const numberCodes = fillArrayFromLowToHigh(48, 57);
const uppercaseCodes = fillArrayFromLowToHigh(65, 90);
const symbolCodes = fillArrayFromLowToHigh(33, 47)
  .concat(58, 64)
  .concat(91, 96)
  .concat(123, 126);

const charNumbersInput = document.getElementById('charNumbersInput');
const includeUppercaseCheckbox = document.getElementById('includeUppercaseCheckbox');
const includeNumbersCheckbox = document.getElementById('includeNumbersCheckbox');
const includeSymbolsCheckbox = document.getElementById('includeSymbolsCheckbox');
const form = document.getElementById('form');
const passwordDomElement = document.getElementById('password-span');

form.onsubmit = e => {
  e.preventDefault();
  const charNumbers = charNumbersInput.value;
  const includeUppercase = includeUppercaseCheckbox.checked;
  const includeNumbers = includeNumbersCheckbox.checked;
  const includeSymbols = includeSymbolsCheckbox.checked;
  const password = generatePassword(charNumbers, includeUppercase, includeNumbers, includeSymbols);
  passwordDomElement.innerText = password
};