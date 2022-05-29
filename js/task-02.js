const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = ingredients.map((e) => {

  const ingredient = document.createElement('li');
  ingredient.textContent = e;
  ingredient.classList.add("item");

  return ingredient;

})

const ingredientsListRef = document.querySelector("#ingredients");
ingredientsListRef.append(...ingredientsList);