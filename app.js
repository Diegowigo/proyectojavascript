alert("¡Bienvenido(a) a recetas de tu cocina!");

//Función (arrow function) para obtener el primer y segundo ingrediente
const getIngredient = (message) => {
  let ingredient = prompt(message);

  while (ingredient !== "tomate" && ingredient !== "lechuga" && ingredient !== "papas" && ingredient !== "carne") {
    alert("Por favor, ingresa uno de los ingredientes anotados.");
    ingredient = prompt(message);
  }
  return ingredient;
};

//Llamado de función para ingrediente 1
let ingredient1 = getIngredient("Ingrese su primer ingrediente que sea uno de los siguientes: tomate, lechuga, papas, carne:");

//Pedir cantidad de ingrediente 1 y revisar si es un número
let quantity1 = Number(prompt(`¿Cuántos de ${ingredient1} tienes?`));
while (quantity1 !== parseInt(quantity1.toString())) {
    alert("Por favor, ingrese su cantidad en números.");
    quantity1 = Number(prompt(`¿Cuántos de ${ingredient1} tienes?`));
}

//Llamado de función para ingrediente 2
let ingredient2 = getIngredient("Ingrese su segundo ingrediente que sea uno de los siguientes: tomate, lechuga, papas, carne:");

//Pedir cantidad de ingrediente 2 y revisar si es un número
let quantity2 = Number(prompt(`¿Cuántos de ${ingredient2} tienes?`));
while (quantity2 !== parseInt(quantity2.toString())) {
    alert("Por favor, ingrese su cantidad en números.");
    quantity2 = Number(prompt(`¿Cuántos de ${ingredient2} tienes?`));
}

//Determinar la menor cantidad para sacar n° de platos y si son iguales, sumarlos
if (quantity1 >= quantity2) {
totalQuantity = quantity2;
} else {
  totalQuantity = quantity1;
}

if (ingredient1 === ingredient2) {
  totalQuantity = quantity1 + quantity2;
}

// Definición en un array de objetos con las combinaciones de ingredientes y sus recetas
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

// Función para buscar la receta según cada ingrediente; uso del método find para buscar la receta en el array de objetos comprobando con el uso del método every e includes para recorrer los ingredientes y recetas y así comprobar que existen en el array de objetos
function findRecipe(ingredient1, ingredient2) {
  const twoIngredients = [ingredient1, ingredient2];
  const matchedRecipe = recipes.find(recipe => {
    return twoIngredients.every(ingredient => recipe.ingredients.includes(ingredient)) &&
           recipe.ingredients.every(ingredient => twoIngredients.includes(ingredient));
  });
  return matchedRecipe ? matchedRecipe.recipe : "Lo siento, no hay una receta definida para estos ingredientes.";
}

// Usar la función para obtener la receta y mostrar con alert el resultado final
const recipe = findRecipe(ingredient1, ingredient2);
alert(`Puedes cocinar ${totalQuantity} ${recipe}.`);