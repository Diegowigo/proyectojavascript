document.addEventListener("DOMContentLoaded", () => {
  const calculateBtn = document.getElementById("calculateRecipe");
  const addRecipeBtn = document.getElementById("addRecipe");
  const showRecipesBtn = document.getElementById("showRecipesBtn");
  showRecipesBtn.addEventListener("click", showRecipes);
  
  loadRecipes();

  calculateBtn.addEventListener("click", () => {
    const ingredient1 = document.getElementById("ingredient1").value;
    const quantity1 = parseInt(document.getElementById("quantity1").value, 10);
    const ingredient2 = document.getElementById("ingredient2").value;
    const quantity2 = parseInt(document.getElementById("quantity2").value, 10);

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
    const newIngredient1 = document.getElementById("newIngredient1").value;
    const newIngredient2 = document.getElementById("newIngredient2").value;
    const newRecipeName = document.getElementById("newRecipeName").value;

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
  fetch('https://raw.githubusercontent.com/Diegowigo/proyectojavascript/main/data.json')
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