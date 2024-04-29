// Task 1
function checkVotingEligibility() {
  console.log('Check voting eligibility');
  var age = 18;
    if(age >= 18){
      console.log("You are eligible for voting");
    }else{
      console.log("You are not eligible for voting.");
    }
}
checkVotingEligibility();

// Task 2
function printNumbersWithWhile() {
  console.log('Print numbers with while loop');
  var num = 1;
  while (num <= 5) {
    console.log(num);
    num++
  }}
printNumbersWithWhile();

// Task 3
function printEvenNumbersWithFor() {
  console.log('Print even numbers with for loop');
  for (var i = 1; i <= 10; i++) {
    if(i % 2 == 0){
      console.log(i);
    }
  }
}
printEvenNumbersWithFor();
// Task 4
function getDayOfWeek() {
  console.log('Get day of the week');
  switch (1) {
    case 0:
      console.log("Sunday");
      break;
      case 1:
      console.log("Monday");
      break;
      case 2:
        console.log("Tuesday");
        break;
        case 3:
          console.log("Wednesday");
          break;
          case 4:
            console.log("Thursday");
            case 5:
      console.log("Friday");
      break;
      case 6:
      console.log("Saturday");
      break;
  }
}
getDayOfWeek();

// Task 5
function sum(num1,num2) {
  console.log('Sum function 5 + 3');
  console.log(num1 + num2);
}
sum(5, 3); 

// Task 6
console.log('Log each fruit to the console');
fruits = ['Watermelon', 'Strawberry','Mango', 'Kiwi', 'Blueberry','Apple']
fruits.forEach((fruit) => {
console.log(fruit);
});

