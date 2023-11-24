// Viết một function xoá các phần từ trùng lặp trong một mảng các số:
const array = [1, 2, 3, 4, 5, 6, 6, 5, 8, 7, 1, 9];
const removeDuplicates = (arr) => {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  console.log(uniqueArr);
};
removeDuplicates(array);
