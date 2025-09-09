const myArr = [0,1,2,3,4,5];
const myPlayers = ["messi","neymar","raphinha"];
const myArr2 = new Array(1,2,3,4,5);
// console.log(myArr[3]);

// array methods

// myArr.push(6);
// myArr.pop();
// console.log(myArr);

// myArr.unshift(8)
// myArr.shift()


// console.log(myArr.includes(6));
// console.log(myArr.indexOf(3));
// console.log(myArr.indexOf(6));

const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);

console.log("A",myArr);
const arr1 = myArr.slice(1,3);
console.log(arr1);
console.log("B",myArr);
const arr2 = myArr.splice(1,3);
console.log(arr2);
console.log("C",myArr);

