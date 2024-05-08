"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");

const input = controls.querySelector('input[type="number"]');
const createButton = controls.querySelector("button[data-create]");
const destroyButton = controls.querySelector("button[data-destroy]");

const boxesContainer = document.querySelector("div#boxes");

const destroyBoxes = () => {
  boxesContainer.innerHTML = "";
  boxesContainer.classList.remove('boxes');
};

destroyButton.addEventListener("click", destroyBoxes);

const createBoxes = () => {
  const numberOfBoxes = Number(input.value);

  if (numberOfBoxes < 1 || numberOfBoxes > 100) {
    return;
  }

  destroyBoxes();

  const boxes = [];

  for (let i = 0; i < numberOfBoxes; i++) {
    const box = document.createElement("div");
    box.style.width = 30 + 10 * i + "px";
    box.style.height = 30 + 10 * i + "px";

    box.style.backgroundColor = getRandomHexColor();

    boxes.push(box);
  }

  boxesContainer.classList.add('boxes');
  boxesContainer.append(...boxes);

  input.value = "";
};

createButton.addEventListener("click", createBoxes);
