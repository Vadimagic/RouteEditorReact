import React from 'react';
import App from './App';
import {shallow, mount} from 'enzyme';

describe('Testing <App/>', () => {

	const app = shallow(<App/>);

	describe('Testing snapshot & state', () => {
		it('App have render correctly', () => {
			expect(app).toMatchSnapshot();
		});
	
		it('App state "placemarks" is array', () => {
			expect(app.state().placemarks).toBeArray();
		});
	
		it('App state "center" is array', () => {
			expect(app.state().center).toBeArray();
		});
	});

	app.state().placemarks = [
		{id: '11893129819110126', title: "Marina", position: [50.751574, 137.073856]},
		{id: '8884471543416042', title: "Vadim", position: [55.751574, 37.573856]},
	];

	describe('Handlers tests', () => {
		it('Testing onBoundsChange', () => {
			const position = [53.11, 37.22];
			app.instance().onBoundsChange({get: () => {return {getCenter: () => position}}});
			expect(app.state().center).toBe(position)
		});

		it('Testing changePlacemarksPosition', () => {
			const index = 1, 
					newPosition = [55.75, 37.57];
			app.instance().changePlacemarksPosition(index, newPosition);
			expect(app.state().placemarks[index].position).toBe(newPosition)
		});

		it('Testing onSortEnd', () => {
			const oldIndex = 0,
					oldMark = app.state().placemarks[oldIndex],
					newIndex = 1, 
					newMark = app.state().placemarks[newIndex];
			app.instance().onSortEnd({oldIndex, newIndex});
			expect(app.state().placemarks[oldIndex]).toBe(newMark);
			expect(app.state().placemarks[newIndex]).toBe(oldMark);
		});

		it('Testing removeMarker', () => {
			const index = 1,
					elem = [app.state().placemarks[index]];
			app.instance().removeMarker(index);
			expect(app.state().placemarks).toEqual(expect.not.arrayContaining(elem));
		});

		it('Testing createMarker', () => {
			const form = mount(
				<form onSubmit={(e) => app.instance().createMarker(e)}>
					<input name="title" defaultValue="Dmitry"/>
				</form>
			);
			form.simulate('submit');
			expect(app.state().placemarks[app.state().placemarks.length - 1].title).toBe("Dmitry");
		});
	});
});