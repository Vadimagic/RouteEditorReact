import Label from "./Label";

const LabelList = ({placemarks}) => (
	<div className="label-list">
		{placemarks.map(mark => 
			<Label 
				title={mark.title}
				key={mark.id}
			/>
		)}
	</div>
)

export default LabelList;