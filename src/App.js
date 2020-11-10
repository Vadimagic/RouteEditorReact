import { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Navigation from "./components/Navigation/Navigation";
import arrayMove from 'array-move';
import './style.css';

class App extends Component{
	state = {
		placemarks: [
			{id: '11893129819110126', title: "Marina", position: [50.751574, 137.073856]},
			{id: '8884471543416042', title: "Vadim", position: [55.751574, 37.573856]},
		],
		centerNow: [55.75, 37.57]
	}

	createMarker = e => {
		e.preventDefault();

		const formData  = Object.fromEntries(new FormData(e.target).entries());
		if (!formData.title.trim().length) {
			return;
		}
		
		let marker = {
			id:(new Date()).getTime()+Math.random(),
			title: formData.title.trim(),
			position: this.state.centerNow,
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
				/>
			</div>
		)
	}
}

export default App;
