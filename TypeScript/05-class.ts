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

// taxi1 => 67ad180
// taxi1.currentLocation
// taxi1.travelTo({x: 10, y: 20});

// taxi2 => 67ad180
// taxi2.currentLocation
// taxi2.travelTo({x: 10, y: 20});
