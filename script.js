// 1. get from the user a number and count 1 to the number chosen
// 2. get from the user two numbers and count untill the number chosen in steps of the second number
// 3. multiplaction table
// 4. pyramid - the user sets a number of levels
// 4.1 base on top levels to the side
// 4.2. base on bottom
// 4.3 centered

// First Assignment
firstAssignment = function () {
  confirm("Get from the user a number and count 1 to the number chosen");
  let userChosenNumber;
  allNumbers = new Array();
  let ChooseNumber = function () {
    while (isNaN(userChosenNumber) || userChosenNumber === 0) {
      userChosenNumber = Number(prompt("Choose a number"));
    }

    for (let count = 0; userChosenNumber >= count; count++) {
      console.log(count);
      allNumbers.push(count);
    }
  };

  ChooseNumber();
  alert(`${allNumbers}`);
};

// Second Assignment
secondAssignment = function () {
  confirm(
    `Here you will choose two numbers, we will count from zero to your first chosen number and raise every step by the second number
    
    EXP: Chosen numbers are:8 and 2 ----- Results: 1, 3, 5, 7`
  );
  userNumbers = new Array();

  let getNumberFromUser = function () {
    let userChosenNumber;
    while (isNaN(userChosenNumber) || userChosenNumber === 0) {
      userChosenNumber = Number(prompt("Please Type Your Number"));
    }
    return userChosenNumber;
  };

  let addTwoChosenNumbersToArray = function () {
    tempNumbers = new Array();
    for (let i = 0; i < 2; i++) {
      tempNumbers.push(getNumberFromUser());
    }
    return tempNumbers;
  };

  userNumbers = addTwoChosenNumbersToArray();

  while (userNumbers[0] < userNumbers[1]) {
    alert(
      "The first number cant be lower then the second one, please try again!"
    );
    userNumbers = addTwoChosenNumbersToArray();
  }

  alert(
    `You choose the numbers ${userNumbers[0]} and ${userNumbers[1]} for each step`
  );

  showAllNumbers = function () {
    countNumber = 0;
    allNumbers = new Array();
    while (countNumber <= userNumbers[0]) {
      allNumbers.push(countNumber);
      countNumber += userNumbers[1];
    }
    return allNumbers;
  };

  allNumbersThatCount = showAllNumbers();
  alert(`Here is the list of all the numbers:
    ${allNumbersThatCount}`);
};

// Third Assignment - Multiplaction Table
let mainNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let tableNumbers = {};
