var segmentArray = function (array, N) {
    var result = [];
    var arrayLength = array.length;
    var chunkSize = Math.ceil(arrayLength / N);
    for (var i = 0; i < arrayLength; i += chunkSize) {
        var chunk = array.slice(i, i + chunkSize);
        result.push(chunk);
    }
    return result;
};
// Testing the function
var testArray = [1, 2, 3, 4, 5];
var groupedArray = segmentArray(testArray, 3);
console.log(groupedArray);
