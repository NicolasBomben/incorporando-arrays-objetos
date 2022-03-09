//creo un objeto con las propiedades de los productos.
class Producto{

    constructor(nombre,precio,talle) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.talle = talle;
    }

}

//declaro array vacio donde se van a ir guardando las cargas de productos.
const productos = [];

//uso metodo push para almacenar
productos.push(new Producto("remera", 2500, "L"));
productos.push(new Producto("jean", 3500, "M"));
productos.push(new Producto("hoodie", 5000, "XL"));

//uso un ciclo for of para recorrer el array y traer la propiedad que quiero ver de ese producto.
for( const producto of productos){
    console.log(producto.nombre);
    console.log(producto.talle);
}

//buscar un producto por nombre previamente guardado.
let buscarProducto = prompt("Ingrese el nombre del producto que desea buscar");
let productoIngresado = productos.filter(producto => producto.nombre.includes(buscarProducto));
console.log(productoIngresado);
