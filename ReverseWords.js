let str = "Associate Software Engineer";
let words = str.split(" ");
let reversedString = "";
for (let i = 0; i < words.length; i++) {
    let reverseWord = "";
    let word = words[i]
    for (let j = word.length - 1; j >= 0; j--) {
        reverseWord += word[j];

    }
    reversedString += reverseWord + " ";
}

console.log("Reversed word :" + " " + reversedString);
