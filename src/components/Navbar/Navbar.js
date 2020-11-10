import LabelList from "./LabelList";

const Navbar = ({placemarks}) => {
	return (
		<div className="nav">
			<form>
				<input type="text" placeholder="Новая точка маршрута"/>
			</form>
			<LabelList placemarks={placemarks}/>
		</div>
	)
}

export default Navbar;