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

// create button on html
const createButton = (arr) => {
  let button = "";
  arr.map((animal, index) => {
    button += `<button  class="btn btn-danger mx-3 my-5">${animal}</button>`;
  });
  return button;
};

// display
document.getElementById("button").innerHTML = createButton(animals);

// get button class
let buttonAnimals = document.querySelectorAll(".btn");

// add event listener
for (let i = 0; i < animals.length; i++) {
  buttonAnimals[i].addEventListener("click", (e) => {
    document.getElementById("container").innerHTML = animals[i];
  });
}
