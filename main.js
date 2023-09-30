//NO 1
const findNumber = (num) => {
  const firstNum = num.toString().split("");
  let indexNum = 1;
  let sum = 0;
  let length = firstNum.length;
  let max = Math.max(...firstNum);
  let min = Math.min(...firstNum);

  for (let i = firstNum[0]; i < length; i++) {
    indexNum += parseInt(firstNum[i]);
  }
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum - indexNum;
};
console.log(findNumber(12346789));
console.log(findNumber(23242526272830));

//NO 2
const reverseWord = (str) => {
  if (str.length > 3) {
    return str
      .split(" ")
      .map((letter) => {
        const reversed = letter.split("").reverse().join("");
        return reversed;
      })
      .join(" ");
  }
};
console.log(reverseWord("italem irad irigayaj"));
console.log(reverseWord("iadab itsap ulalreb"));
console.log(reverseWord("nalub kusutret gnalali"));

//NO 3
const isNull = (arr) => {
  if (arr.length % 2 == 0) {
    let sum = arr.reduce((a, b) => a - b == 0);
    return sum;
  } else if (arr.length % 2 !== 0) {
    let sum = arr.reduce((a, b, c) => a + b - c == 0);
    return sum;
  }
};
console.log(isNull([5, 5]));
console.log(isNull([6, 3, 100]));
console.log(isNull([0, 0, 0, 20, 5, 15]));

//N0 5
const elevator = (arr) => {
  const array = arr.reverse();
  if (array[0] == 0) {
    return 1;
  } else {
    return array[0];
  }
};
console.log(elevator([0, 1, 0, 0, 0]));
console.log(elevator([2, 5, 0, 0, 4]));
console.log(elevator([0, 0, 0, 0, 0]));
