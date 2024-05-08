"use strict";

const images = [
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");
const galleryItems = [];

for (const image of images) {
  const galleryItem = document.createElement("li");
  const imageElement = document.createElement("img");
  imageElement.src = image.url;
  imageElement.alt = image.alt;
  galleryItem.append(imageElement);

  galleryItems.push(galleryItem);
}

gallery.append(...galleryItems);
