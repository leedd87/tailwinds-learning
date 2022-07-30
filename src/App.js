import "./App.css";
import ChitChat from "./components/ChitChat";
//import NotificacionIndex from "./components/NotificacionIndex";

function App() {
	return (
		<div className="bg-blue-200 min-h-screen grid place-content-center">
			{/*<ChitChat />*/}
			{/* <NotificacionIndex /> */}
			<button className="bg-blue-900 px-4 py-2 rounded shadow-md focus:ring hover:bg-blue-50 transition-all active:transform active:translate-y-1">
				Este es el mejor boton
			</button>
		</div>
	);
}

export default App;
