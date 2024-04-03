document.addEventListener('DOMContentLoaded', () => {
  const calculateButton = document.getElementById('calculateRecipe');
  const resultArea = document.getElementById('recipeResult');

  calculateButton.addEventListener('click', () => {
      const ingredient1 = document.getElementById('ingredient1').value;
      const quantity1 = parseInt(document.getElementById('quantity1').value, 10);
      const ingredient2 = document.getElementById('ingredient2').value;
      const quantity2 = parseInt(document.getElementById('quantity2').value, 10);

      if (!ingredient1 || !ingredient2 || isNaN(quantity1) || isNaN(quantity2)) {
          resultArea.textContent = 'Por favor, complete correctamente todos los campos.';
          return;
      }

      let totalQuantity = ingredient1 === ingredient2 ? quantity1 + quantity2 : Math.min(quantity1, quantity2);

      const recipe = findRecipe(ingredient1, ingredient2);
      resultArea.textContent = `Puedes cocinar ${totalQuantity} ${recipe}.`;
  });
});

function findRecipe(ingredient1, ingredient2) {
  const recipes = [
    { id: 1, ingredients: ["tomate", "tomate"], recipe: "tomates confitados" },
    { id: 2, ingredients: ["tomate", "lechuga"], recipe: "ensalada" },
    { id: 3, ingredients: ["tomate", "papas"], recipe: "papas con salsa de tomates" },
    { id: 4, ingredients: ["tomate", "carne"], recipe: "salteado de carne con tomates" },
    { id: 5, ingredients: ["lechuga", "tomate"], recipe: "ensalada" },
    { id: 6, ingredients: ["lechuga", "lechuga"], recipe: "ensalada de lechuga" },
    { id: 7, ingredients: ["lechuga", "papas"], recipe: "ensalada de papas" },
    { id: 8, ingredients: ["lechuga", "carne"], recipe: "tacos de lechuga rellenos de carne" },
    { id: 9, ingredients: ["papas", "tomate"], recipe: "papas con salsa de tomates" },
    { id: 10, ingredients: ["papas", "lechuga"], recipe: "ensalada de papas" },
    { id: 11, ingredients: ["papas", "papas"], recipe: "papas fritas" },
    { id: 12, ingredients: ["papas", "carne"], recipe: "carne con papas fritas" },
    { id: 13, ingredients: ["carne", "tomate"], recipe: "salteado de carnes con tomate" },
    { id: 14, ingredients: ["carne", "lechuga"], recipe: "tacos de lechuga rellenos de carne" },
    { id: 15, ingredients: ["carne", "papas"], recipe: "carne con papas fritas" },
    { id: 16, ingredients: ["carne", "carne"], recipe: "carne asada" }
  ];

  const twoIngredients = [ingredient1, ingredient2].sort();
  const matchedRecipe = recipes.find(recipe => {
      return twoIngredients.every(ingredient => recipe.ingredients.includes(ingredient)) &&
          recipe.ingredients.every(ingredient => twoIngredients.includes(ingredient));
  });
  return matchedRecipe ? matchedRecipe.recipe : "Lo siento, no hay una receta definida para estos ingredientes.";
}