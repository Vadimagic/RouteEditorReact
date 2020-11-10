import Label from "./Label";

const LabelList = ({placemarks}) => (
	<div className="nav__label-list label-list">
		{placemarks.map(mark => 
			<Label 
				title={mark.title}
				key={mark.id}
			/>
		)}
	</div>
)

export default LabelList;