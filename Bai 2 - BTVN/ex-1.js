// Viết một function đảo ngược một string bất kỳ, sử dụng các phương thức của array.
const arr = [1, 2, 3, 4, 5];
const reverseArr = (array) => {
  array.reverse();
  console.log("array reverse: ", array);
};
reverseArr(arr);