const groupArrayElements = <T>(inputArray: T[], N: number):T[][] =>  {
    const result: T[][] = [];
    const arrayLength = inputArray.length;
    const segmentSize = Math.ceil(arrayLength / N); // splits the array evenly rounding up
   
    for (let i = 0; i < arrayLength; i += segmentSize) {
        const segment = array.slice(i, i + segmentSize); //extract segment
        result.push(segment);
      }
    
      return result;
    }


// Testing the function
const testArray = [1, 2, 3, 4, 5];
const groupedArray = groupArrayElements(testArray, 3);
console.log(groupedArray);