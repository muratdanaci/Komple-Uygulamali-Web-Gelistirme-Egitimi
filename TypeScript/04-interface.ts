// let travelTo = (point: {x: number, y: number}) => {
// 	//  ..
// }

// travelTo ({
// 	x: 11,
// 	y: 22
// })

// let getDistance =  (pointA: {x: number, y: number}, pointB: {x: number, y: number}) => {
// 	// ..
// }

interface Point {
	x: number,
	y: number
}

interface Passenger {
	name: string;
	phone: string;
}

interface Vehicle {
	currentLocation: Point;
	travelTo(point: Point): void;
	getDistance(pointA: Point, pointB: Point): number;
	addPassanger(passenger: Passenger): void;
	removePassanger(passenger: Passenger): void;
}

let travelTo = (point: Point) => {
	//  ..
}

let getDistance =  (pointA: Point, pointB: Point) => {
	// ..
}