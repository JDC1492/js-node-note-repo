//May 11th, 2022

//The Spread Operator
//For me, it can be thought of as a way to "dump" whats contained in the iterable(arr, sets, maps, strings) out into a function, or even another iterable.

const arr = [7, 8, 9];
//^^ the orginal array
const makeANewArr = [...arr, 10, 11, 12];
//^^ creating a new array that will hold the individual elements of the ['arr' array] and added integers of 10, 11, and 12.
console.log(arr, makeANewArr);

//can also be used in functions as well.

const names = new Array("Amy", "Tails", "Sonic");

function allOfThem(name1, name2, name3) {
  return `${name1},${name2}, and ${name3}..it's time to come home!`;
}

allOfThem(...names);
