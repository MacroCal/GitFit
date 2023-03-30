'use strict';


let favorites = [];
let clickedBoxes = [];
let storedBoxes = JSON.parse(localStorage.getItem('favorites')) || [];
let boxes = document.querySelectorAll('.box');

function Data(name, filepath) {
  this.name = name;
  this.filepath = filepath;
}

boxes.forEach(boxElement => {
  let imageElement = boxElement.querySelector('img');
  let filepath = imageElement.getAttribute('src');
  let name = imageElement.getAttribute('alt');
  const box = new Data(name, filepath);

  boxElement.addEventListener('click', function (event) {
    event.preventDefault();
    if (!clickedBoxes.includes(boxElement)) {
      console.log(`Box ${box.name} clicked! Image filepath: ${box.filepath}`);
      favorites.push(box);
      clickedBoxes.push(boxElement);
      renderResults(favorites);
    }
  });
  storedBoxes.push(box);
});


localStorage.setItem('favorites', JSON.stringify(favorites));
console.log('these are faorites', favorites);



// need to create a function to render the results onto page

function renderResults(favorites) {
  let resultsEl = document.getElementById('myListResults');
  resultsEl.innerHTML = ''; // clear previous results

  favorites.forEach(favorite => {
    let liEl = document.createElement('li');
    liEl.textContent = `${favorite.name} `;
    resultsEl.appendChild(liEl);
  });
}

renderResults(favorites);




