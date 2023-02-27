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
thirdAssignment = function () {
  for (let x = 1; x < 11; x++) {
    let row = "";
    for (let y = 1; y < 11; y++) {
      row += `${x * y}\t`;
    }
    console.log(row);
  }
};

// Pyramid 1 - Top Left
fourthAssignment = function () {
  numOfLevel = prompt("enter number of levels");
  starsRow = "";
  for (numberOfStars = 0; numberOfStars < numOfLevel; numberOfStars++) {
    starsRow += "* ";
    console.log(starsRow);
  }
};

// Pyramid 2 - Bottom Left
fifthAssignment = function () {
  let numOfLevel = prompt("enter number of levels");

  for (let numberOfStars = numOfLevel; numberOfStars > 0; numberOfStars--) {
    let starsRow = "";
    for (let i = 0; i < numberOfStars; i++) {
      starsRow += "* ";
    }

    console.log(starsRow);
  }
};

// Pyramid 3 - Center
sixthAssignment = function () {
  addSideSpaces = function (sideSpaces) {
    while (sideSpaces > 0) {
      starsRow += "  ";
      sideSpaces--;
    }
    return starsRow;
  };
  let numOfLevel = prompt("enter number of levels");
  let maxOfStars = Number(numOfLevel) + Number(numOfLevel) - 1;

  for (let i = 1; i <= numOfLevel; i++) {
    let numberOfStars = i + i - 1;
    let sideSpaces = maxOfStars - numberOfStars;

    starsRow = "";
    // Adding spaces in the first side
    starsRow += addSideSpaces(sideSpaces / 2);
    for (j = 0; j < numberOfStars; j++) {
      starsRow += "* ";
    }

    console.log(starsRow);
    numberOfStars += 2;
  }
};

// Pyramid 4 - Top Right
seventhAssignment = function () {
  addSideSpaces = function (sideSpaces) {
    while (sideSpaces > 0) {
      starsRow += "  ";
      sideSpaces--;
    }
    return starsRow;
  };
  let numOfLevel = prompt("enter number of levels");
  let maxOfStars = Number(numOfLevel) + Number(numOfLevel) - 1;

  for (let i = 1; i <= numOfLevel; i++) {
    let numberOfStars = i;
    let sideSpaces = maxOfStars - numberOfStars;

    starsRow = "";
    // Adding spaces in the first side
    starsRow += addSideSpaces(sideSpaces);
    for (j = 0; j < numberOfStars; j++) {
      starsRow += "* ";
    }

    console.log(starsRow);
    numberOfStars += 2;
  }
};
