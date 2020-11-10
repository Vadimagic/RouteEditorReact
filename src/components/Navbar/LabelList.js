import { SortableContainer } from 'react-sortable-hoc'
import Label from "./Label";

const LabelList = SortableContainer(
	({placemarks, removeMarker}) => (
		<div className="nav__label-list label-list">
			{placemarks.map((mark, index) => 
				<Label 
					title={mark.title}
					removeMarker={removeMarker}
					number={index}
					index={index}
					key={mark.id}
				/>
			)}
		</div>
	)
)

export default LabelList;