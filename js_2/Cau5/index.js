//my map
Array.prototype.myMap = function (callBack) {
  const resultArray = [];
  for (let index = 0; index < this.length; index++) {
    resultArray.push(callBack(this[index], index, this));
  }
  return resultArray;
};

//my filter
Array.prototype.myFilter = function (callback) {
  const filterArr = [];
  for (let index = 0; index < this.length; index++) {
    if (!!callback(this[index], index, this)) {
      filterArr.push(this[index]);
    }
  }
  return filterArr;
};

//my reduce
Array.prototype.myReduce = function (callBack, accumulator) {
  if (this.length < 1) {
    throw new Error("Array is Empty");
  }

  if (!accumulator) {
    if (typeof this[0] === "string") {
      accumulator = "";
    } else if (typeof this[0] === "number") {
      accumulator = 0;
    }
  }

  for (let index = 0; index < this.length; index++) {
    accumulator = callBack(accumulator, this[index]);
  }
  return accumulator;
};

let animals = [
  "cat",
  "rabbit",
  "dog",
  "fox",
  "fish",
  "racoon",
  "tiger",
  "bear",
  "parrot",
  "snake",
];

let filter = animals.myFilter((animal) => animal === "cat");

console.log(filter);

let allAnimals = animals.myReduce((result, animal) => {
  return (result += animal + " ");
});

console.log(allAnimals);

let animalNames = animals.map((animal, index, animals) => {
  return animal;
});

console.log(animalNames);
