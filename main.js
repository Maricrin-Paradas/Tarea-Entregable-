
const productos = [
	{ id: 1, nombre: 'Escuadra', precio: 323.45 },
	{ id: 2, nombre: 'Calculadora', precio: 234.56 },
	{ id: 3, nombre: 'Globo Terráqueo', precio: 45.67 },
	{ id: 4, nombre: 'Paleta Pintura', precio: 456.78 },
	{ id: 5, nombre: 'Reloj', precio: 67.89 },
	{ id: 6, nombre: 'Agenda', precio: 78.9 }
];

const nombresProductos = productos.map(el => el.nombre).join(', ');
let precioTotal = productos.reduce((acc, prev) => acc + prev.precio, 0);
precioTotal = Number(precioTotal.toFixed(2))
let precioPromedio = precioTotal / productos.length;
precioPromedio = Number(precioPromedio.toFixed(2));
const preciosProductos = productos.map(el => el.precio);
const menorPrecio = Math.min(...preciosProductos);
const mayorPrecio = Math.max(...preciosProductos);

const obj2 = {
	nombresProductos,
	precioTotal,
	precioPromedio,
	menorPrecio,
	mayorPrecio
};

console.log(obj2);