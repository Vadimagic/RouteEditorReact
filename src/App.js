import { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Navigation from "./components/Navigation/Navigation";
import arrayMove from 'array-move';
import './style.css';

class App extends Component{
	state = {
		placemarks: [],
		center: [55.75, 37.57]
	}

	createMarker = e => {
		e.preventDefault();

		const formData  = Object.fromEntries(new FormData(e.target).entries());
		if (!formData.title.trim().length) {
			return;
		}
		
		let marker = {
			id: String(Math.random()).replace(/.*\./, ''),
			title: formData.title.trim(),
			position: this.state.center,
			index:this.state.placemarks.length
		};

		this.setState({
			placemarks: this.state.placemarks.concat(marker)
		});

		e.target.reset()
	}

	removeMarker = index => {
		const placemarksCopy = this.state.placemarks.filter((_, i) => i !== index);

		this.setState({
			placemarks: placemarksCopy
		});
	} 

	onSortEnd=({oldIndex,newIndex})=>{
		this.setState({
				placemarks:arrayMove(this.state.placemarks, oldIndex, newIndex).map((mark,i)=>{
					mark.index=i;
					return mark;
			})
		});
	};

	onBoundsChange = e => {
		this.setState({
			center: e.get('target').getCenter()
		});
	}

	changePlacemarksPosition = (index, newPosition) => {
		const placemarksClon = this.state.placemarks;
		placemarksClon[index].position = newPosition
		this.setState({
			placemarks: placemarksClon
		})
	} 
	
	render() {
		return (
			<div className="container">
				<Navbar 
					placemarks={this.state.placemarks}
					createMarker={this.createMarker}
					removeMarker={this.removeMarker}
					onSortEnd={this.onSortEnd}
				/>
				<Navigation 
					geometry={this.state.placemarks}
					onBoundsChange={this.onBoundsChange}
					changePlacemarksPosition={this.changePlacemarksPosition}
				/>
			</div>
		)
	}
}

export default App;
