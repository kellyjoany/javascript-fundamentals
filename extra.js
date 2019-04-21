// ######################################### //

// 1. Write a literal object called obj with 3 properties.

  let obj = {
  nome: 'kelly',
  peso: 54,
  idade: 29  
}

// ######################################### //

// 2. Write an array called arrEx2 with length 3.

 arrEx2 = [ 0, 1, 2];

// ######################################### //

// 3. Write a loop using for structure that prints all positive numbers until 48 (including 48).

for(let i = 0; i <= 48; i+=1){
  console.log(i);
}

// ######################################### //

// 4. Write a loop using for structure that prints all negative numbers until -30 (excluding).

for(let i = -1; i > -30; i-=1){
   console.log(i);
}

// ######################################### //

// 5. Write a loop using for structure that prints all numbers from 102 (including) to 32 (including) in steps of 2.

for(let i = 102; i >= 32; i-=2){
  console.log(i);
}


// ######################################### //

// 6. Given the array below, write a function add2 that will receive the array as an argument and will return a new array with all items of the original array added by 2.

const arrEx6 = [2, 4, 6, 7, 9, 12];

function add2(arr){
  let newArr = [];
  for(let i = 0; i < arr.length; i+=1 ){
    newArr.push(arr[i] + 2);
  }
  return newArr;
}

// ######################################### //

// 7. Given an array of numbers, write a function checkSum that returns the string 'even' if the sum of all values are even, otherwise return 'odd';

const arrEx7 = [1, 2, 3];

const checkSum = arr => {
  let sum = 0;
  for(let i = 0; i < arr.length; i += 1){
    sum += arr[i];
  }
  if(sum % 2 === 0){
    return even;
  }
  return odd;
};

// ######################################### //
