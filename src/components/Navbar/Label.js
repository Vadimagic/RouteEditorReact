import { SortableElement } from 'react-sortable-hoc'

const Label = SortableElement(
	({title, number, removeMarker}) => (
		<div className="label-list__item">
			<span className="label-list__text">{title}</span>
			<button 
				className="label-list__button"
				onClick={() => removeMarker(number)}
			/>
		</div>
	)
)

export default Label;