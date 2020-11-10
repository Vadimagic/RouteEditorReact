import { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Navigation from "./components/Navigation/Navigation";
import './style.css'

class App extends Component{
	state = {
		placemarks: [
			{id: '11893129819110126', title: "Marina", position: [50.751574, 137.073856]},
			{id: '8884471543416042', title: "Vadim", position: [55.751574, 37.573856]},
		]
	}
	
	render() {
		return (
			<div className="container">
				<Navbar 
					placemarks={this.state.placemarks} 
				/>
				<Navigation 
					geometry={this.state.placemarks}
				/>
			</div>
		)
	}
}

export default App;
