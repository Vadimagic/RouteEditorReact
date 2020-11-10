import { YMaps, Map, Polyline, SearchControl, ZoomControl, RulerControl} from 'react-yandex-maps';
import PlacemarkList from './PlacemarkList'

const Navigation = (props) => {

	return (
		<YMaps>
			<Map 
				defaultState={{ center: [55.75, 37.57], zoom: 5}}
				className="map"
			>
				<Polyline
					geometry={props.geometry.map(item => item.position)}
					options={{
						balloonCloseButton: false,
						strokeColor: '#000',
						strokeWidth: 5,
						strokeOpacity: 0.45,
					}}
				/>
				<PlacemarkList
					placemarks={props.geometry} 
				/>
				<SearchControl/>
				<ZoomControl/>
				<RulerControl 
					options={{ float: 'right' }}
				/>
			</Map>
		</YMaps>
	)
}

export default Navigation;