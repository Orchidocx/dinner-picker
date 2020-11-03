const dinner = document.getElementById("dinner-text");
const dinnerSpan = document.getElementById("dinner-text-span");
const selectButton = document.querySelector("#select-button");
const resetButton = document.querySelector("#reset-button");

const dinnerMenu = [
  "spaghetti & meatballs",
  "short ribs",
  "sushi",
  "hamburger",
  "hot dog",
  "pizza",
  "cheesecake",
  "dumplings",
  "tamales",
  "wagyu steak",
  "tacos",
  "burrito",
];

let dinnerTonight = dinnerMenu[
  Math.floor(Math.random() * dinnerMenu.length)
].toUpperCase();

const getDinner = () => {
  dinnerTonight = dinnerMenu[
    Math.floor(Math.random() * dinnerMenu.length)
  ].toUpperCase();
  dinner.innerText = dinnerTonight;
  dinnerSpan.innerText = dinnerTonight;
};

let randomizeInterval = setInterval(getDinner, 100);
let isRolling = true;

const getAnchor = () => {
  window.open(`https://images.google.com/search?tbm=isch&q=${dinnerTonight}`);
};

const select = () => {
  if (isRolling) {
    clearInterval(randomizeInterval);
    isRolling = false;
    selectButton.toggleAttribute("disabled");
    resetButton.toggleAttribute("disabled");
    dinner.addEventListener("click", getAnchor);
    dinnerSpan.addEventListener("click", getAnchor);
  }
};

const reset = () => {
  if (!isRolling) {
    randomizeInterval = setInterval(getDinner, 100);
    isRolling = true;
    selectButton.toggleAttribute("disabled");
    resetButton.toggleAttribute("disabled");
  }
};

selectButton.addEventListener("click", select);
resetButton.addEventListener("click", reset);
