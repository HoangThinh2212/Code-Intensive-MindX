// Viết một chương trình lấy phần tử xuất hiện nhiều nhất trong một mảng và số lần suất hiện của nó trong mảng:
const array = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];
function findMostFrequentElement(arr) {
  let frequencyMap = new Map();
  let maxFrequency = 0;
  let mostFrequentElement = null;
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    let frequency = frequencyMap.get(element) || 0;
    frequency++;
    if (frequency > maxFrequency) {
      maxFrequency = frequency;
      mostFrequentElement = element;
    }
    frequencyMap.set(element, frequency);
  }
  console.log("element:", mostFrequentElement);
  console.log("frequency: ", maxFrequency);
}

findMostFrequentElement(array);

