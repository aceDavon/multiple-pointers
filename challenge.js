const pointer = (arr) => {
  // sort the array to check for edge cases
  arr.sort((a, b) => a - b);

  // Initialize multi pointers at different 
  // points in the array
  let left = 0;
  let right = arr.length -1;

  // Loop over array and sum up each pointer
  while(left < right) {
    const sum = arr[left] + arr[right];
    // if sum equals 0, breakout
    if(sum === 0) return [arr[left], arr[right]];

    // if sum is greater than 0, mover the right 
    // pointer to a lesser number down the array
    if(sum > 0) right -=1;

    // if sum id less than 0, move the left pointer
    // to a bigger number up the array
    if(sum < 0) left +=1;
  }
};

console.log(pointer([0, 10, -2, 6, 1, -4, 2, -1]));