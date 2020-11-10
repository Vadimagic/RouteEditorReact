import Label from "./Label";

const LabelList = ({placemarks, removeMarker}) => (
	<div className="nav__label-list label-list">
		{placemarks.map((mark, index) => 
			<Label 
				title={mark.title}
				removeMarker={removeMarker}
				number={index}
				key={mark.id}
			/>
		)}
	</div>
)

export default LabelList;