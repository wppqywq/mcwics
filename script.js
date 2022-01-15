const number = document.querySelector('.numberToConvert');
const convertFrom = document.querySelector('.convertFrom');
const convertTo = document.querySelector('.convertTo');

function handleInput(number, convertFrom, convertTo) {
    if (convertFrom == 'Grams' && convertTo == 'Kilograms') {
        var result = document.querySelector('.result');
        result.setAttribute(number / 1000);
    }
}