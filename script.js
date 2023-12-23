console.log("Inicio del programa");

// FUNCIÓN

function pedirNombre() {
    return prompt("Ingrese su nombre");
}

function pedirApellido() {
    return prompt("Ingrese su apellido");
}

function pedirEdad() {
    return prompt("Ingrese su edad");
}

let nombre = pedirNombre();
let apellido = pedirApellido();
let edad = pedirEdad();

let mensaje;

while (isNaN(edad) || edad === null || edad === "" || edad <= 17) {
    alert("La edad ingresada no es válida ⛔. Por favor, ingrese una edad válida.");
    edad = pedirEdad();
}

if (edad > 17) {
    mensaje = "Sos mayor de edad, podrás realizar operaciones en este sitio ✅";
} 

alert(mensaje);

alert("¡Bienvenido, " + nombre + "!😊");

console.log("¡Bienvenido, " + nombre + "!");



let producto;
let cantidad;
let precioUnitario;
let total;

// Usuario selecciona un producto
do {
  producto = prompt("Ingrese el producto (remera, buzo o conjunto):").toLowerCase();
  if (producto === "remera" || producto === "buzo" || producto === "conjunto") {
    break;
  } else {
    alert("Producto no válido. Por favor, ingrese remera, buzo o conjunto.");
  }
} while (true);

// Precio unitario según el producto seleccionado
if (producto === "remera") {
  precioUnitario = 25000;
} else if (producto === "buzo") {
  precioUnitario = 35000;
} else {
  precioUnitario = 70000;
}

// Solicitar al usuario que ingrese la cantidad
do {
  cantidad = parseInt(prompt("Ingrese la cantidad (mayor que 0):"));
  if (!isNaN(cantidad) && cantidad > 0) {
    break;
  } else {
    alert("Cantidad no válida. Por favor, ingrese un número mayor que 0.");
  }
} while (true);

// Calcular el total de la compra
total = precioUnitario * cantidad;

// Mostrar el resultado
alert("Producto: " + producto + "\nCantidad: " + cantidad + "\nTotal de la compra: $" + total);


let mensajeTotal = "Producto = " + producto + "\n" + "Cantidad = " + cantidad + (cantidad === 1 ? " Unidad" : " Unidades") + "\n" + "Total = $" + total;

console.log(mensajeTotal);

document.querySelector("h1").innerText = mensajeTotal;
