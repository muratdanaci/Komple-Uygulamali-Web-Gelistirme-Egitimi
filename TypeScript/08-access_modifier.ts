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
	constructor (private location?: Point, private color?: string) {	}

	travelTo(point: Point): void {
		console.log(`Taxi X: ${this.location.x}, Y: ${this.location.y}'dan X: ${point.x}, Y: ${point.y} konumuna gidiyor`);
	};
}


let taxi_1 = new Taxi({ x: 1, y: 2 });
taxi_1.travelTo({ x: 3, y: 5 });

