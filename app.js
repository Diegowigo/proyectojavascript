alert("¡Bienvenido(a) a recetas de tu cocina!");

function obtenerIngrediente(mensaje) {
  let ingrediente = prompt(mensaje);

  while (ingrediente !== "tomate" && ingrediente !== "lechuga" && ingrediente !== "papas" && ingrediente !== "carne") {
    alert("Por favor, ingresa uno de los ingredientes anotados.");
    ingrediente = prompt(mensaje);
  }

  return ingrediente;
}

let ingrediente1 = obtenerIngrediente("Ingrese su primer ingrediente que sea uno de los siguientes: tomate, lechuga, papas, carne:");
let cantidad1 = prompt("¿Cuántos de " + ingrediente1 + " tienes?");

let ingrediente2 = obtenerIngrediente("Ingrese su segundo ingrediente que sea uno de los siguientes: tomate, lechuga, papas, carne:");
let cantidad2 = prompt("¿Cuántos de " + ingrediente2 + " tienes?");

if (cantidad1 >= cantidad2) {
  cantidadTotal = cantidad2;
} else {
  cantidadTotal = cantidad1;
}

if (ingrediente1 && ingrediente2) {
  if (ingrediente1 === "tomate" && ingrediente2 === "tomate") {
    alert("Puedes cocinar " + cantidadTotal + " tomates confitados.");
  } else if (ingrediente1 === "tomate" && ingrediente2 === "lechuga") {
    alert("Puedes cocinar " + cantidadTotal + " ensalada.");
  } else if (ingrediente1 === "tomate" && ingrediente2 === "papas") {
    alert("Puedes cocinar " + cantidadTotal + " papas con salsa de tomates.");
  } else if (ingrediente1 === "tomate" && ingrediente2 === "carne") {
    alert("Puedes cocinar " + cantidadTotal + " salteado de carne con tomates.");
  } else if (ingrediente1 === "lechuga" && ingrediente2 === "tomate") {
    alert("Puedes cocinar " + cantidadTotal + " ensalada.");
  } else if (ingrediente1 === "lechuga" && ingrediente2 === "lechuga") {
    alert("Puedes cocinar " + cantidadTotal + " ensalada de lechuga.");
  } else if (ingrediente1 === "lechuga" && ingrediente2 === "papas") {
    alert("Puedes cocinar " + cantidadTotal + " ensalada de papas.");
  } else if (ingrediente1 === "lechuga" && ingrediente2 === "carne") {
    alert("Puedes cocinar " + cantidadTotal + " tacos de lechuga rellenos de carne.");
  } else if (ingrediente1 === "papas" && ingrediente2 === "tomate") {
      alert("Puedes cocinar " + cantidadTotal + " papas con salsa de tomates.");
  } else if (ingrediente1 === "papas" && ingrediente2 === "lechuga") {
      alert("Puedes cocinar " + cantidadTotal + " ensalada de papas.");
  } else if (ingrediente1 === "papas" && ingrediente2 === "papas") {
      alert("Puedes cocinar " + cantidadTotal + " papas fritas.");
  } else if (ingrediente1 === "papas" && ingrediente2 === "carne") {
      alert("Puedes cocinar " + cantidadTotal + " carne con papas fritas.");
  } else if (ingrediente1 === "carne" && ingrediente2 === "tomate") {
      alert("Puedes cocinar " + cantidadTotal + " salteado de carnes con tomate.");
  } else if (ingrediente1 === "carne" && ingrediente2 === "lechuga") {
      alert("Puedes cocinar " + cantidadTotal + " tacos de lechuga rellenos de carne.");
  } else if (ingrediente1 === "carne" && ingrediente2 === "papas") {
      alert("Puedes cocinar " + cantidadTotal + " carne con papas fritas.");
  } else if (ingrediente1 === "carne" && ingrediente2 === "carne") {
      alert("Puedes cocinar " + cantidadTotal + " carne asada.");
    } else {
    alert("Lo siento, no hay una receta definida para estos ingredientes.");
  } } else {
  alert("Por favor, asegúrate de proporcionar dos ingredientes válidos para buscar una receta.");
}