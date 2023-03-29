'use strict';

const macronutrientRatios = {
  lose: {
    protein: 0.5,
    carbs: 0.4,
    fat: 0.2
  },
  maintain: {
    protein: 0.75,
    carbs: 0.5,
    fat: 0.2
  },
  gain: {
    protein: 1,
    carbs: 0.4,
    fat: 0.3
  }
};

// Define the workout plan for each goal
const workoutPlans = {
  lose: '3-4 days of cardio and 2 days of strength training',
  maintain: '3 days of cardio and 3 days of strength training',
  gain: '2 days of cardio and 4 days of strength training'
};

// Function to calculate the recommended macronutrient breakdown and workout plan
function calculate() {
  // const age = Number(document.getElementById('age').value);
  const weight = Number(document.getElementById('weight').value);
  const goal = document.querySelector('input[name="goal"]:checked').value;

  // Calculate the recommended macronutrient breakdown based on the user's goal and weight
  const protein = Math.round(weight * macronutrientRatios[goal].protein);
  const carbs = Math.round(weight * macronutrientRatios[goal].carbs);
  const fat = Math.round(weight * macronutrientRatios[goal].fat);

  // Display the recommended macronutrient breakdown and workout plan on the webpage
  document.getElementById('result-macros').textContent = `Hi ${name}! Based on your Age of ${age}, Weight of ${weight}, and Goal of ${goal} weight, we recommend the following Macronutrients: Protein: ${protein}g, Carbs: ${carbs}g, Fat: ${fat}g`;
  document.getElementById('result-workout').textContent = `Hi ${name}! Based on your Age of ${age}, Weight of ${weight}, and Goal of ${goal} weight, we recommend the following Workout Plan: ${workoutPlans[goal]}`;
}

// Add an event listener to the form's submit button to call the calculate function
// document.querySelector('form').addEventListener('submit', function (event) {
//   event.preventDefault();
//   calculate();
// });
let resultsButton = document.getElementById('calcButton');
resultsButton.addEventListener('click', function (event) {
  event.preventDefault();
  calculate();
});


