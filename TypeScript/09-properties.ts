interface Point {
	x: number,
	y: number
}
interface Vehicle {
	travelTo(point: Point): void;
}

let travelTo = (point: Point) => {
	//  ..
}

class Taxi implements Vehicle {
	constructor (private _location?: Point, private _color?: string) {	}

	travelTo(point: Point): void {
		console.log(`Taxi X: ${this._location.x}, Y: ${this._location.y}'dan X: ${point.x}, Y: ${point.y} konumuna gidiyor`);
	};

	get location() {
		return this._location;
	}

	set location(value: Point) {
		if (value.x < 0 || value.y < 0) {
			throw new Error("Koordinat negatif olamaz");
		}
		this._location = value;
	}
}


let taxi_1 = new Taxi({ x: 1, y: 2 });
taxi_1.travelTo({ x: 3, y: 5 });

let currentLocation = taxi_1.location();
taxi_1.location({ x: 1, y: 2 });