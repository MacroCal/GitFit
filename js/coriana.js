'use strict';

// Define an array to store the reviews
let reviews = [];

// Get the review form and review list elements
const reviewForm = document.querySelector('#review-form');
const reviewList = document.querySelector('#review-list');

// Add an event listener to the review form
reviewForm.addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the values from the form
  const name = document.querySelector('#name').value;
  const rating = document.querySelector('#rating').value;
  const comment = document.querySelector('#comment').value;
  const date = new Date().toLocaleDateString();

  // Create a new review object and add it to the reviews array
  const newReview = {
    name: name,
    rating: rating,
    comment: comment,
    date: date
  };
  reviews.push(newReview);

  // Clear the form values
  document.querySelector('#name').value = '';
  document.querySelector('#rating').value = '5';
  document.querySelector('#comment').value = '';

  // Render the reviews
  renderReviews();
});

// Define a function to render the reviews
function renderReviews() {
  // Clear the review list
  reviewList.innerHTML = '';

  // Loop through the reviews array and add each review to the review list
  for (let i = 0; i < reviews.length; i++) {
    const review = reviews[i];

    const reviewItem = document.createElement('li');
    reviewItem.classList.add('review-item');

    const reviewHeader = document.createElement('div');
    reviewHeader.classList.add('review-header');

    const nameElement = document.createElement('h3');
    nameElement.textContent = review.name;

    const dateElement = document.createElement('span');
    dateElement.classList.add('review-date');
    dateElement.textContent = review.date;

  }

  const reviewList = document.querySelector('.review-list2');

  function storeData(){
    let data = JSON.stringify(state);
    localStorage.setItem('productData', data);
  }
  
  function readData(){
    let data = localStorage.getItem('productData');
  
    if (data){
      state = JSON.parse(data);
    } else {
      storeData();
    }
  
  }
  
  readData();

  const moreReviews = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
  const slicedFruits = fruits.slice(1, 4);
  
  console.log(slicedFruits); 



  const reviewNewList = document.querySelector('.review-list');
  const pages = Math.ceil(reviewNewList.children.length / 3);
  let currentPage = 1;
  
  function showPage(page) {
    currentPage = page;
    const startIndex = (currentPage - 1) * 3;
    const endIndex = startIndex + 3;
    for (let i = 0; i < reviewNewList.children.length; i++) {
      if (i >= startIndex && i < endIndex) {
        reviewNewList.children[i].style.display = 'block';
      } else {
        reviewNewList.children[i].style.display = 'none';
      }
    }
  }
  
  function createPagination() {
    const pagination = document.querySelector('.pagination');
    pagination.innerHTML = '';
    const prevButton = document.createElement('a');
    prevButton.classList.add('prev');
    prevButton.href = '#';
    prevButton.textContent = 'Previous';
    pagination.appendChild(prevButton);
    for (let i = 1; i <= pages; i++) {
      const pageButton = document.createElement('a');
      pageButton.classList.add('page');
      pageButton.href = '#';
      pageButton.textContent = i;
      if (i === currentPage) {
        pageButton.classList.add('active');
      }
      pagination.appendChild(pageButton);
    }
    const nextButton = document.createElement('a');
    nextButton.classList.add('next');
    nextButton.href = '#';
    nextButton.textContent = 'Next';
    pagination.appendChild(nextButton);
  }
  
  showPage(1);
  createPagination();
  
  const pageButtons = document.querySelectorAll('.page');
  pageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      showPage(button.textContent);
      const activeButton = document.querySelector('.page.active');
      activeButton.classList.remove('active');
      button.classList.add('active');
  
  
  





// const newReview = 
//   <li>
//     <div class="review-header2">
//       <h3>Jane Doe</h3>
//       <span class="review-date2">03/29/2023</span>
//     </div>
//     <div class="review-body2">
//       <p>This is a new review that was added dynamically using JavaScript.</p>
//     </div>
//   </li>
// ;

// reviewList2.innerHTML += newReview;