const multiplicarCantidad = function (a, b) {
    return a * b
}

const sumaPrecio = function (a, b) {
    return a + b
}

const restaDescuento = function (a, b) {
    return a - b
}

const dividirCuotas = function (a, b) {
    return a / b
}

let repetirBucle = false;
let repetirBucleProducto = false
let repetirBucleCantidad = false
let repetirBucleCuotas = false
let precioProducto
let cantidadProducto
let precioTotal = 0
let id
let descuento
let cuotas
let carritoDescuento

const Catalogo = [
    { nombre: "Harina", precio: 250 },
    { nombre: "Huevos", precio: 200 },
    { nombre: "Leche", precio: 100 }
]

function pushCarrito(a, b) {
    Carrito.push(a[b]);
}

const Carrito = []

do {
    do {
        let elegirProducto = prompt(`Bienvenido, elija los productos que quiera comprar
*Harina
*Huevos
*Leche`).toLowerCase();

        switch (elegirProducto) {
            case "harina":
                alert(`Elegiste ${elegirProducto}`)
                precioProducto = 250
                repetirBucleProducto = false
                id = 0
                break;
            case "huevos":
                alert(`Elegiste ${elegirProducto}`)
                precioProducto = 200
                repetirBucleProducto = false
                id = 1
                break;
            case "leche":
                alert(`Elegiste ${elegirProducto}`)
                precioProducto = 100
                repetirBucleProducto = false
                id = 2
                break;
            default:
                alert("Ingresó un valor invalido")
                repetirBucleProducto = true
                break;
        }

    } while (repetirBucleProducto == true);

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
                repetirBucleCantidad = false
                pushCarrito(Catalogo, id)
                break;
            case "2":
                alert(`Elegiste ${elegirCantidad} `)
                cantidadProducto = 2
                repetirBucleCantidad = false
                pushCarrito(Catalogo, id)
                pushCarrito(Catalogo, id)
                break;
            case "3":
                alert(`Elegiste ${elegirCantidad} `)
                cantidadProducto = 3
                repetirBucleCantidad = false
                pushCarrito(Catalogo, id)
                pushCarrito(Catalogo, id)
                pushCarrito(Catalogo, id)
                break;
            case "4":
                alert(`Elegiste ${elegirCantidad} `)
                cantidadProducto = 4
                repetirBucleCantidad = false
                pushCarrito(Catalogo, id)
                pushCarrito(Catalogo, id)
                pushCarrito(Catalogo, id)
                pushCarrito(Catalogo, id)
                break;
            default:
                alert("Ingresó un valor invalido")
                repetirBucleCantidad = true
                break;
        }

    } while (repetirBucleCantidad == true);

    let askAgain = confirm("¿Desea seguir comprando?")

    if (askAgain === true) {
        repetirBucle = true
    }
    else {
        repetirBucle = false
    }

    precioTotal += multiplicarCantidad(precioProducto, cantidadProducto)
    descuento = precioProducto * 15 / 100

} while (repetirBucle);

let promptDescuento = confirm("¿Desea un codigo de descuento del 15%?")

if (promptDescuento === true) {
    carritoDescuento = Carrito.map(carrito => {
        return {
            nombre: carrito.nombre,
            precio: carrito.precio - descuento
        }
    })
} else {
    carritoDescuento = 0
}

do {
    let promptCuotas = prompt(`¿En cuantas cuotas desea pagar?
    *1
    *3
    *6
    *12`)
    switch (promptCuotas) {
        case "1":
            cuotas = 1
            alert(`Eligió pagar en ${cuotas} cuotas`)
            repetirBucleCuotas = false
            break;
        case "3":
            cuotas = 3
            alert(`Eligió pagar en ${cuotas} cuotas`)
            repetirBucleCuotas = false
            break;
        case "6":
            cuotas = 6
            alert(`Eligió pagar en ${cuotas} cuotas`)
            repetirBucleCuotas = false
            break;
        case "12":
            cuotas = 12
            alert(`Eligió pagar en ${cuotas} cuotas`)
            repetirBucleCuotas = false
            break;

        default:
            alert("Eligió un valor no valido")
            repetirBucleCuotas = true
            break;
    }
} while (repetirBucleCuotas);

if (promptDescuento === true) {
    const totalDescuento = carritoDescuento.reduce((acumulador, elemento) => acumulador + elemento.precio, 0)
    console.log(totalDescuento);
} else {
    const totalSinDescuento = Carrito.reduce((acumulador, elemento) => acumulador + elemento.precio, 0)
    console.log(totalSinDescuento);
}

console.log(Carrito);
console.log(carritoDescuento);
console.log(cuotas);

