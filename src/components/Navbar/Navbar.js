import LabelList from "./LabelList";

const Navbar = ({placemarks, createMarker, removeMarker}) => {
	return (
		<div className="nav">
			<form onSubmit={createMarker}>
				<input className="nav__input-add" name="title" type="text" placeholder="Новая точка маршрута"/>
			</form>
			<LabelList 
				placemarks={placemarks}
				removeMarker={removeMarker}
			/>
		</div>
	)
}

export default Navbar;