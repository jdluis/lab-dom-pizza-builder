// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGreen) => {
    if (state.greenPeppers) {
      oneGreen.style.visibility = 'visible';
    } else {
      oneGreen.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauce.classList.add('sauce-white');
  } else {
    sauce.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crust.classList.add('crust-gluten-free');
  } else {
    crust.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  function switchActive(stateName, className) {
    let button = document.querySelector(`.btn-${className}`);
    if (stateName) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  }

  switchActive(state.glutenFreeCrust, 'crust');
  switchActive(state.whiteSauce, 'sauce');
  switchActive(state.greenPeppers, 'green-peppers');
  switchActive(state.mushrooms, 'mushrooms');
  switchActive(state.pepperoni, 'pepperoni');
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const pricePanelDOM = document.querySelector('.price');
  const ingredientPriceDOM = document.querySelectorAll('.price li');

  //price variables
  const totalPriceDOM = document.querySelector('.price strong');
  const basePriceDOM = document.querySelector('.price b');

  //render
  function renderIngredient(element, stateName, condition) {
    let namesIngredient = element.childNodes[0].nodeValue.split(' ')[1];
    console.log(namesIngredient);

    if (stateName && namesIngredient === condition) {
      element.style.visibility = 'visible';
    } else {
      element.style.visibility = 'hidden';
    }
  }

  renderIngredient(ingredientPriceDOM[0], state.pepperoni, 'pepperoni');
  renderIngredient(ingredientPriceDOM[1], state.mushrooms, 'mushrooms');
  renderIngredient(ingredientPriceDOM[2], state.greenPeppers, 'green');
  renderIngredient(ingredientPriceDOM[3], state.whiteSauce, 'white');
  renderIngredient(ingredientPriceDOM[4], state.glutenFreeCrust, 'gluten-free');

  //update price
  let totalPrice = 0;
  let basePrice = Number(basePriceDOM.innerText.slice(1, 3));
  ingredientPriceDOM.forEach((element) => {
    if (element.childNodes[0].length > 11) {
      totalPrice = totalPrice + Number(element.innerText.slice(1, 2));
    }
  });

  return (totalPriceDOM.innerText = `$${totalPrice + basePrice}`);
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
