// function functionName (){
//     //code to run
// }

//function without parameter

function grettings() {
  console.log("Hello world");
}
grettings();

function welcome(name) {
  console.log(`welcome to class mr/miss ${name}`);
}

welcome("james");

function addition(add1, add2) {
  return add1 + add2;
}

console.log(addition(58, 7));

function add() {
  let x = 45;
  let y = 45;
  return x + y;
}
console.log(add());
// class work
function luckyNumber(num) {
  if (num === 4) {
    return "Congratulations you won!!!";
  } else {
    return "Please try again";
  }
}

let number = luckyNumber(4);
console.log(number);



////class work 2

function scoreChecker(score){
  if(score >= 70 && score <= 100){
    return "A"
  }else if(score <= 69 && score >= 50){
    return "B"
  }else if(score <= 49 && score >= 0){
    return "F"
  }else{
    return "Invalid user"
  }
}

let gradingCheck = scoreChecker(100);
console.log("Student grade:", gradingCheck)



// const getGrade = (score)=>{
//   if(score >= 90){
//     return "A"
//   }else if(score >=75){
//     return "B"
//   }else if(score>= 60){
//     return "C"
//   }else{
//     return "F"
//   }

// };

// const printResult = (name, score)=>{
//   const grade = getGrade( score )
//   console.log(name + "scored" + score , "Grade :" + grade)
// }

// printResult( "amara" , "92")

