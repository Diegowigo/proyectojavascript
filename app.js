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
let quantity1 = Number(prompt("¿Cuántos de " + ingredient1 + " tienes?"));
while (quantity1 !== parseInt(quantity1.toString())) {
    alert("Por favor, ingrese su cantidad en números.");
    quantity1 = Number(prompt("¿Cuántos de " + ingredient1 + " tienes?"));
}

//Llamado de función para ingrediente 2
let ingredient2 = getIngredient("Ingrese su segundo ingrediente que sea uno de los siguientes: tomate, lechuga, papas, carne:");

//Pedir cantidad de ingrediente 2 y revisar si es un número
let quantity2 = Number(prompt("¿Cuántos de " + ingredient2 + " tienes?"));
while (quantity2 !== parseInt(quantity2.toString())) {
    alert("Por favor, ingrese su cantidad en números.");
    quantity2 = Number(prompt("¿Cuántos de " + ingredient2 + " tienes?"));
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

//Selección de recetas con switch
switch (ingredient1 + "|" + ingredient2) {
  case "tomate|tomate":
    alert("Puedes cocinar " + totalQuantity + " tomates confitados.");
    break;
  case "tomate|lechuga":
    alert("Puedes cocinar " + totalQuantity + " ensalada.");
    break;
  case "tomate|papas":
    alert("Puedes cocinar " + totalQuantity + " papas con salsa de tomates.");
    break;
  case "tomate|carne":
    alert("Puedes cocinar " + totalQuantity + " salteado de carne con tomates.");
    break;
  case "lechuga|tomate":
    alert("Puedes cocinar " + totalQuantity + " ensalada.");
    break;
  case "lechuga|lechuga":
    alert("Puedes cocinar " + totalQuantity + " ensalada de lechuga.");
    break;
  case "lechuga|papas":
    alert("Puedes cocinar " + totalQuantity + " ensalada de papas.");
    break;
  case "lechuga|carne":
    alert("Puedes cocinar " + totalQuantity + " tacos de lechuga rellenos de carne.");
    break;
  case "papas|tomate":
    alert("Puedes cocinar " + totalQuantity + " papas con salsa de tomates.");
    break;
  case "papas|lechuga":
    alert("Puedes cocinar " + totalQuantity + " ensalada de papas.");
    break;
  case "papas|papas":
    alert("Puedes cocinar " + totalQuantity + " papas fritas.");
    break;
  case "papas|carne":
    alert("Puedes cocinar " + totalQuantity + " carne con papas fritas.");
    break;
  case "carne|tomate":
    alert("Puedes cocinar " + totalQuantity + " salteado de carnes con tomate.");
    break;
  case "carne|lechuga":
    alert("Puedes cocinar " + totalQuantity + " tacos de lechuga rellenos de carne.");
    break;
  case "carne|papas":
    alert("Puedes cocinar " + totalQuantity + " carne con papas fritas.");
    break;
  case "carne|carne":
    alert("Puedes cocinar " + totalQuantity + " carne asada.");
    break;
  default:
    alert("Lo siento, no hay una receta definida para estos ingredientes.");
    break;
}

//Selección de recetas con if
/* if (ingredient1 && ingredient2) {
  if (ingredient1 === "tomate" && ingredient2 === "tomate") {
    alert("Puedes cocinar " + totalQuantity + " tomates confitados.");
  } else if (ingredient1 === "tomate" && ingredient2 === "lechuga") {
    alert("Puedes cocinar " + totalQuantity + " ensalada.");
  } else if (ingredient1 === "tomate" && ingredient2 === "papas") {
    alert("Puedes cocinar " + totalQuantity + " papas con salsa de tomates.");
  } else if (ingredient1 === "tomate" && ingredient2 === "carne") {
    alert("Puedes cocinar " + totalQuantity + " salteado de carne con tomates.");
  } else if (ingredient1 === "lechuga" && ingredient2 === "tomate") {
    alert("Puedes cocinar " + totalQuantity + " ensalada.");
  } else if (ingredient1 === "lechuga" && ingredient2 === "lechuga") {
    alert("Puedes cocinar " + totalQuantity + " ensalada de lechuga.");
  } else if (ingredient1 === "lechuga" && ingredient2 === "papas") {
    alert("Puedes cocinar " + totalQuantity + " ensalada de papas.");
  } else if (ingredient1 === "lechuga" && ingredient2 === "carne") {
    alert("Puedes cocinar " + totalQuantity + " tacos de lechuga rellenos de carne.");
  } else if (ingredient1 === "papas" && ingredient2 === "tomate") {
      alert("Puedes cocinar " + totalQuantity + " papas con salsa de tomates.");
  } else if (ingredient1 === "papas" && ingredient2 === "lechuga") {
      alert("Puedes cocinar " + totalQuantity + " ensalada de papas.");
  } else if (ingredient1 === "papas" && ingredient2 === "papas") {
      alert("Puedes cocinar " + totalQuantity + " papas fritas.");
  } else if (ingredient1 === "papas" && ingredient2 === "carne") {
      alert("Puedes cocinar " + totalQuantity + " carne con papas fritas.");
  } else if (ingredient1 === "carne" && ingredient2 === "tomate") {
      alert("Puedes cocinar " + totalQuantity + " salteado de carnes con tomate.");
  } else if (ingredient1 === "carne" && ingredient2 === "lechuga") {
      alert("Puedes cocinar " + totalQuantity + " tacos de lechuga rellenos de carne.");
  } else if (ingredient1 === "carne" && ingredient2 === "papas") {
      alert("Puedes cocinar " + totalQuantity + " carne con papas fritas.");
  } else if (ingredient1 === "carne" && ingredient2 === "carne") {
      alert("Puedes cocinar " + totalQuantity + " carne asada.");
    } else {
    alert("Lo siento, no hay una receta definida para estos ingredientes.");
  } } else {
  alert("Por favor, asegúrate de proporcionar dos ingredientes válidos para buscar una receta.");
} */
