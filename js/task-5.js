'use strict';

const body = document.querySelector('body');
const button = document.querySelector('button.change-color');
const colorText = document.querySelector('span.color');

const handleClick = () => {
  const newColor = getRandomHexColor();

  body.style.backgroundColor = newColor;
  colorText.innerText = newColor;
};

button.addEventListener('click', handleClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
