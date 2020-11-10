import { Placemark } from 'react-yandex-maps'

const PlacemarkList = ({placemarks, changePosition}) => {
	return placemarks.map((placemark, index) => 
		<Placemark 
			geometry={placemark.position}
			properties={{
				balloonContent: placemark.title
			}}
			modules={['geoObject.addon.balloon']}
			key={placemark.id} 
			options={{ draggable: true }}
			onDragEnd={e => changePosition(index, e.get('target').geometry.getCoordinates())}
		/>
	)
}

export default PlacemarkList