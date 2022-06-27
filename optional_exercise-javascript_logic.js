// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. 
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

// More information regarding sort and other methods in https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

exampleArray = [1,2,"2",4,591,392,391,"Test",2,5,10,2,1,1,1,20,20,"2"];
exampleArray2 = [1,"2","3",2];

const answerExercise1 = (arr) =>  {
      sortedArray = arr.sort((a, b) => a - b);

      numbersArray = sortedArray.filter(elem => typeof elem === 'number')
      stringsArray = sortedArray.filter(elem => typeof elem === 'string')

  for (element of numbersArray) {
  		// is it a repeated element? If repeated, result will be more than 0.
    if (numbersArray.lastIndexOf(element) - numbersArray.indexOf(element) > 0) {
      // repeated element. How many times it appears?
      let number = numbersArray.lastIndexOf(element) - numbersArray.indexOf(element) + 1;
      // create an array with that repeated element "number" times.
      let newSubArray = Array(number);
      newSubArray = newSubArray.fill(element,0,number);    
      // delete from ordered numbersArray the repeated elements and insert the newly created array.
      numbersArray.splice(numbersArray.indexOf(element),number,newSubArray);
    }
}
    // finalArray contains the numbers array.
    finalArray = new Array;
    finalArray.push(numbersArray);
    // if we have a stringsArray we push it too
if (stringsArray.length > 0) {
    finalArray.push(stringsArray);
}
  return finalArray;
}

answerExercise1(exampleArray);
answerExercise1(exampleArray2);

// Question 2: Write a javascript function that takes an array of numbers and a target number. 
// The function should find two different numbers in the array that, when added together, give the target number. 
// For example: answer([1,2,3], 4)should return [1,3]

exampleArray3 = [1, 2, 3, 4, 5, 6];

const answerExercise2 = (numbersArray, targetNumber) =>
	{ 
    let firstNumber;
    let secondNumber;
    // first loop to access each array element
    numbersArray.forEach((element, primaryIndex) =>
                         { 
    // second loop to access next elements in the array
    for (secondaryIndex = primaryIndex + 1; secondaryIndex < numbersArray.length; secondaryIndex++)
                                                {
                                                  if (element + numbersArray[secondaryIndex] === targetNumber) {
                                                    firstNumber = element;
                                                    secondNumber = numbersArray[secondaryIndex]
                                                  }
                                                } })
    // if we have both numbers and they are different from 'undefined', I have two different numbers that, when added, give the target number.
    if (firstNumber && secondNumber != typeof 'undefined') {
      return [firstNumber, secondNumber];
    }
    else return 'No valid numbers found';
  }

answerExercise2(exampleArray3, 9);


//Question 3: Write a function that converts HEX to RGB. 
// Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

// colorConversion may receive 1 or 3 arguments.
const colorConversion = (...colors) => {
    switch(colors.length) {
      //If receives 3 arguments, that will be a RGB value to transform to HEX.
      case 3:
        let hexRed = colors[0].toString(16).toUpperCase();
            let hexGreen = colors[1].toString(16).toUpperCase();
            let hexBlue = colors[2].toString(16).toUpperCase();
        return hexRed+hexGreen+hexBlue;
        //If receives 1 argument, that will be an HEX value to transform to RGB
      case 1:
        colorsString = colors.toString();
        let red = parseInt(colorsString.substring(0, 2), 16);
            let green = parseInt(colorsString.substring(2, 4), 16);
            let blue = parseInt(colorsString.substring(4, 6), 16);
        return `rgb(${red},${green},${blue})`;
        // In other case, function was incorrectly called.
      default:
        console.log('Wrong call to the function.');
        break;
    }
  }

  
