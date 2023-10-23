interface Point {
	x: number,
	y: number
}
interface Vehicle {
	currentLocation: Point;
	travelTo(point: Point): void;
}

let travelTo = (point: Point) => {
	//  ..
}

class Taxi implements Vehicle {
	color: string;
	currentLocation: Point;
	constructor (location?: Point, color?: string) {
		this.currentLocation = location;
		this.color = color;
	}

	travelTo(point: Point) {
		console.log(`Taxi X: ${point.x}, Y: ${point.y} konumuna gidiyor`);
	};
}


let taxi_1 = new Taxi({ x: 1, y: 2 });
taxi_1.travelTo({ x: 1, y: 2 });

let taxi_2 = new Taxi({ x: 1, y: 2 }, 'red');
taxi_2.travelTo({ x: 1, y: 2 });

let taxi_3 = new Taxi();


console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);

console.log(taxi_2.currentLocation);