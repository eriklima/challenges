/* 
Convert numeric values into their corresponding word representations, 
specifically within the range of 0 to 999. 
Achieve this without utilizing any external libraries
*/

const unitVocabulary = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
}

const tenVocabulary = {
    0: "",
    1: "Ten",
    2: "Twenty",
    3: "Thirty",
    4: "Forty",
    5: "Fifty",
    6: "Sixty",
    7: "Seventy",
    8: "Eighty",
    9: "Ninety",
}

function numberToWords(number) {
    if (number == 0) {
        return unitVocabulary[0]
    }

    if (number > 999) {
        return "Out of range"
    }

    let text = ""

    const h = Math.floor(number / 100)
    const hMod = number % 100
    const t = Math.floor(hMod / 10)
    const u = hMod % 10

    if (h > 0) {
        text += unitVocabulary[h] + " Hundred"
    }

    if (t > 0) {
        if (!!text) {
            text += " and "
        }
        text += tenVocabulary[t]
    }

    if (u > 0) {
        if (h > 0 && t <= 0) {
            text += " and "
        } else if (t > 0) {
            text += "-"
        }
        text += unitVocabulary[u]
    }

    return text
}

console.log(numberToWords(0)) //Zero
console.log(numberToWords(42)) //Forty-Two
console.log(numberToWords(123)) //One Hundred and Twenty-Three
console.log(numberToWords(999)) //Nine Hundred and Ninety-Nine
console.log(numberToWords(909)) //Nine hundred and Nine
console.log(numberToWords(1000)) // Out of range
