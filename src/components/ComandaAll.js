import { useEffect, useState } from "react";

// Definimos componente
const ComandaAll = () => {

// Definimos useState para renderizar cambios
const [allComandas, setAllComandas] = useState ({})

//Definimos useEffect para no generar bucle infinito de llamadas
useEffect(() => {
	fetch ('http://localhost:3000/comandas')
	.then (response => response.json())
	.then (data => {
		setAllComandas(data);
	})
	
}, []);

const saber = (allComandas) => {
	//return console.log((Object.keys(allComandas)).length);
		for (let clave in allComandas){
			console.log(allComandas[clave]);
		  }
	

}
let db = []
const jugar = (allComandas) => {
	const longitud = (Object.keys(allComandas)).length;
	for (let i = 1 ; i < longitud + 1 ; i++){
		for (let clave in allComandas[i]){
			console.log(allComandas[i][clave])
			db.push(allComandas[i][clave]);
			console.log(db);
		}
	}
}


	// {
	// 	for (let clave in allComandas) {
	// 	 comandasArray = (allComandas[clave]).push
	// 	}
	// 	console.log (comandasArray);
	// }

// Devolvemos parte grafica
return (
<>
	<h2>Las comandas son</h2>
	{jugar(allComandas)}
</>	
)};

// Exportamos componente
export default ComandaAll;

//	


	//{allComandas.map(comanda => <li>{comanda}</li>)}
