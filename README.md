# Array Grouping Script

This script provides a function for dividing an array into equally sized segments. It takes an array of any length and a positive integer as input and returns an array of segments.

## Requirements

- Node.js (https://nodejs.org)
- TypeScript (https://www.typescriptlang.org)

## Installation

1. Clone or download the script files to your local machine.



## Usage

1. Open the `groupArrayElements.ts` file in a code editor.

2. Modify the `array` and `N` variables in the file to specify your own array and the desired number of segments.

3. Save the changes.

4. Compile the TypeScript code to JavaScript by running the following command:

-  `tsc groupArrayElements.ts`
-  `node groupArrayElements.ts`


## How it works

The script follows the following steps to divide the array into segments:

1. Calculate the size of each segment:
   - The length of the input array is divided by the desired number of segments.
   - The result is rounded up to ensure that each segment has at least the calculated average size.

2. Iterate over the array:
   - Start from index 0 and continue until reaching the end of the array.
   - In each iteration, extract a segment from the array using the calculated segment size.
   - Add the segment to the resulting array of segments.

3. Return the resulting array of segments.
