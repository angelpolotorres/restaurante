 
 const ComandaAdd = () => {

let camarero, productos

const catchCamarero = (event) => {
	camarero = event.target.value;
	console.log (camarero)
}
const catchProductos = (event) => {
	productos = event.target.value;
	console.log (productos)
}

const addComanda = () => {

	fetch(`http://localhost:3000/comanda/add`, {
		method: "POST",
		body: JSON.stringify({
			camarero : camarero,
			productos : productos
		}), 
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		}
	})
	.then(response => response.json())
	.then(data => console.log(data));
}



return(
<>
	<label>
		Camarero:
		<input onChange={catchCamarero} type="text" name="camarero"></input>
	</label>
	<label>
		Productos:
		<input onChange={catchProductos} type="text" name="productos"></input>
	</label>
	<button onClick={addComanda}>Añadir Comanda</button>
</>	

)};
 export default ComandaAdd;

 // Capturar info de imputs en variables
 // Cuando pulsas añadir generar llamada con esos imputs
 // Volver a dejar cuador en blanco y decir "comanda añadida"