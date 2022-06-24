const multiplicarCantidad = function (a, b) {
    a * b
}

const sumaPrecio = function (a, b) {
    a + b
}

const restaDescuento = function (a, b) {
    a - b
}

const dividirCuotas = function (a, b) {
    a / b
}

let repetirBucle = false;
let precioProducto
let cantidadProducto

const Catalogo = [
    { nombre: "Harina", precio: 250 },
    { nombre: "Huevos", precio: 200 },
    { nombre: "Leche", precio: 100 }
]

do {
    let elegirProducto = prompt(`Bienvenido, elija los productos que quiera comprar
*Harina
*Huevos
*Leche`).toLowerCase();

    switch (elegirProducto) {
        case "harina":
            alert(`Elegiste ${elegirProducto}`)
            precioProducto = 250
            break;
        case "huevos":
            alert(`Elegiste ${elegirProducto}`)
            precioProducto = 200
            break;
        case "leche":
            alert(`Elegiste ${elegirProducto}`)
            precioProducto = 100
            break;
        default:
            alert("Ingresó un valor invalido")
            repetirBucle = true
            break;
    }

} while (repetirBucle == true);

do {
    let elegirCantidad = prompt(`Elija la cantidad de productos que quiera
    *1
    *2
    *3
    *4`)

    switch (elegirCantidad) {
        case "1":
            alert(`Elegiste ${elegirCantidad} `)
            cantidadProducto = 1
            break;
        case "2":
            alert(`Elegiste ${elegirCantidad} `)
            cantidadProducto = 2
            break;
        case "3":
            alert(`Elegiste ${elegirCantidad} `)
            cantidadProducto = 3
            break;
        case "4":
            alert(`Elegiste ${elegirCantidad} `)
            cantidadProducto = 4
            break;
        default:
            alert("Ingresó un valor invalido")
            repetirBucle = true
            break;
    }

    let askAgain = confirm("¿Desea seguir comprando?")

    if (askAgain === true) {
        repetirBucle = true
    }

} while (repetirBucle == true);

