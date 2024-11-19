import "./styles.css";

function capitalize(word){
    return word[0].toUpperCase() + word.slice(1);
}

function reverseString(word){
    // let reversed = '';
    // for(let i = word.length - 1; i >= 0; i--){
    //     reversed += word[i];
    // }
    // return reversed;

    // faster way
    return word.split('').reverse().join('');
}

const calculator = {
    add: (a,b) => {return a + b},
    sub: (a,b) => {return a - b},
    mul: (a,b) => {return a * b},
    div: (a,b) => {return a / b},
}

function caesarCipher(phrase, shift){
    const cipherLower = 'abcdefghijklmnopqrstuvwxyz';
    const cipherUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const phraseArray = phrase.split('');
    let encryptedText = '';


    for(let char of phraseArray){
        if(char >= 'a' && char <= 'z'){
            let newCharCode = ((char.charCodeAt() - 97 + shift) % 26) + 97; // 97 = ascii value of a
            encryptedText += String.fromCharCode(newCharCode);
        }
        else if (char >= 'A' && char <= 'Z'){
            let newCharCode = ((char.charCodeAt() - 65 + shift) % 26) + 65; // 65 = ascii value of A
            encryptedText += String.fromCharCode(newCharCode);
        }
        else {
            encryptedText += char;
        }
    }

    return encryptedText;
}

function analyzeArray(array){
    const values = {
        average: null,
        min: null,
        max: null,
        length: null,
    };

    let sum = 0;
    let average = 0;
    let min = array[0];
    let max = array[0];
    for(let i = 0; i < array.length; i++){
        average += array[i];
        if(array[i] > max){
            max = array[i];
        }
        else if (array[i] < min){
            min = array[i];
        }
    }
    sum = average / array.length;
    values.average = sum;
    values.min = min;
    values.max = max;
    values.length = array.length;

    return values;
}


module.exports = { capitalize, reverseString, calculator, caesarCipher, analyzeArray };