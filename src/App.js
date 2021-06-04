import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ComandaAll from './components/ComandaAll.js';
import ComandaId from './components/ComandaId.js';
import ComandaAdd from './components/ComandaAdd.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
		<Router>
			<h1>Restaurante</h1>
			<Link to="/comandas/add">Añadir Comanda</Link>
			<Link to="/comandas/:id">Consultar Comanda</Link>
			<Link to="/comandas">Ver todas las Comandas</Link>

			<Switch>
				<Route path="/comandas/add"><ComandaAdd></ComandaAdd></Route>
				<Route path="/comandas/:id" component={ComandaId} />
				<Route path="/comandas">
					<ComandaAll></ComandaAll>
				</Route>
			</Switch>
		</Router>
      </header>
    </div>
  );
}

export default App;
