import { Placemark } from 'react-yandex-maps'

const PlacemarkList = ({placemarks}) => {
	return placemarks.map(placemark => 
		<Placemark 
			geometry={placemark.position}
			properties={{
				balloonContent: placemark.title
			}}
			modules={['geoObject.addon.balloon']}
			key={placemark.id} 
			options={{ draggable: true }}
		/>
	)
}

export default PlacemarkList