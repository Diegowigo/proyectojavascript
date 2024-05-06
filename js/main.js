document.addEventListener("DOMContentLoaded", () => {
  const getById = id => document.getElementById(id);
  const calculateBtn = getById("calculateRecipe");
  const addRecipeBtn = getById("addRecipe");
  const showRecipesBtn = getById("showRecipesBtn");

  showRecipesBtn.addEventListener("click", showRecipes);
  
  loadRecipes();

  const getValue = id => getById(id).value;

  calculateBtn.addEventListener("click", () => {
    const ingredient1 = getValue("ingredient1");
    const ingredient2 = getValue("ingredient2");
    const quantity1 = parseInt(getValue("quantity1"), 10);
    const quantity2 = parseInt(getValue("quantity2"), 10);

    if (!ingredient1 || !ingredient2 || isNaN(quantity1) || isNaN(quantity2)) {
      Swal.fire({
        icon: "error",
        text: "Por favor, complete correctamente todos los campos.",
      });
      return;
    };

    let totalQuantity = ingredient1 === ingredient2 ? quantity1 + quantity2 : Math.min(quantity1, quantity2);

    const recipe = findRecipe(ingredient1, ingredient2);
    Swal.fire({
      title: `Puedes cocinar ${totalQuantity} ${recipe}.`,
      iconHtml: '<img src=img/favicon.svg width="100px" height="100px">',
    });
  });

  addRecipeBtn.addEventListener("click", () => {
    const newIngredient1 = getValue("newIngredient1");
    const newIngredient2 = getValue("newIngredient2");
    const newRecipeName = getValue("newRecipeName");

    if (!newIngredient1 || !newIngredient2 || !newRecipeName) {
      Swal.fire({
        icon: "error",
        text: "Por favor, complete correctamente todos los campos.",
      });
      return;
    };

    const newRecipe = {
      id: new Date().getTime(),
      ingredients: [newIngredient1, newIngredient2].sort(),
      recipe: newRecipeName,
    };

    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    recipes.push(newRecipe);
    localStorage.setItem("recipes", JSON.stringify(recipes));

    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
    });
    Toast.fire({
      icon: "success",
      text: "¡Receta añadida exitosamente!"
    });
  });
});

function loadFromJson() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const recipes = data.defaultRecipes || [];
      localStorage.setItem("recipes", JSON.stringify(recipes));
    })
    .catch(error => {
      Swal.fire({
        icon: "error",
        text: "Error al cargar las recetas predeterminadas.",
      });
    });
};

function loadRecipes() {
  if (!localStorage.getItem("recipes")) {
    loadFromJson();
  }
};

function findRecipe(ingredient1, ingredient2) {
  const recipes = JSON.parse(localStorage.getItem("recipes"));
  const twoIngredients = [ingredient1, ingredient2].sort();
  const matchedRecipe = recipes.find(recipe => {
    return twoIngredients.every(ingredient => recipe.ingredients.includes(ingredient)) &&
        recipe.ingredients.every(ingredient => twoIngredients.includes(ingredient));
  });
  return matchedRecipe.recipe;
};

function showRecipes() {
  const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
  const recipesTableContainer = document.getElementById("recipesTableContainer");

  let tableHTML = "<table class='table'><thead><tr><th>ID</th><th>Ingredientes</th><th>Receta</th></tr></thead><tbody>";
  recipes.forEach(recipe => {
    const ingredients = recipe.ingredients.join(", ");
    tableHTML += `<tr><td>${recipe.id}</td><td>${ingredients}</td><td>${recipe.recipe}</td></tr>`;
  });
  tableHTML += "</tbody></table>";
  recipesTableContainer.innerHTML = tableHTML;
};