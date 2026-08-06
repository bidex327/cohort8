//section B: Arithemetic operators

const num1 = 50;
const num2 = 75;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

let number  = 17;
let division = 5;

console.log(number % division  )

let price = 1500
let discount = 200;
console.log(price - discount);




















let loginAttempts = 0 
while(loginAttempts < 3){
    console.log(`attempt number ${loginAttempts}`)
    loginAttempts++
}

let scores = [20, 12, 25, 15, 57]
for(score = 0; score < scores.length; score++){
    console.log(scores[score] + 20)
}