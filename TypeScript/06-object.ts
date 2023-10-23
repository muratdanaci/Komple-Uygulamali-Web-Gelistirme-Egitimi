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
	currentLocation: Point;
	travelTo(point: Point) {
		console.log(`Taxi X: ${point.x}, Y: ${point.y} konumuna gidiyor`);
	};
}

class Bus implements Vehicle {
	currentLocation: Point;
	travelTo(point: Point) {
		console.log(`Otobus X: ${point.x}, Y: ${point.y} konumuna gidiyor`);
	};
}

let taxi_1 = new Taxi();

taxi_1.travelTo({ x: 1, y: 2 });
taxi_1.currentLocation = { x: 1, y: 2 };
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);


let taxi_2 = new Taxi();
taxi_2.travelTo({ x: 5, y: 6 });
taxi_2.currentLocation = { x: 1, y: 2 };

let bus_1 = new Bus();
bus_1.currentLocation = { x: 3, y: 4 };
