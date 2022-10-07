// Created by Barsbold on 27th of June
// When I created this, God and I knew how it works.
// Now, only god knows it.

let bg = document.getElementById("background");
let id = 1;

setInterval(() => {
  if (id > 4) id = 1;
  bg.style.backgroundImage = `url("./assets/img/${id}.jpg")`;
  id++;
}, 7000);
