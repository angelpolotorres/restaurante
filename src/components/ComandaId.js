import { useEffect, useState } from "react";

 
 const ComandaId = (props) => {
	
	let idComanda = props.match.params.id;
	const [ComandaById, setComandaById] = useState ({});

	useEffect(() => {
		fetch (`http://localhost:3000/comandas/${idComanda}`)
		.then (response => response.json())
		.then (data => {
			setComandaById(data)
		})

	}, []);


	return(
	<>
		<h2>su camarero es: {ComandaById.camarero}</h2>
		<h2>Sus produtos son: {ComandaById.productos}</h2>
	</>
 )};
 export default ComandaId;