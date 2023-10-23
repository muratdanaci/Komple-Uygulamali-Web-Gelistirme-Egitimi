// function getAverage(a, b, c) {
// 	const result = (a + b + c) / 3;
// 	return "Result: " + result;
// }

// function getAverage(a: number, b: number, c: number): string {
// 	const result = (a + b + c) / 3;
// 	return "Result: " + result;
// }

// function getAverage(a: number, b: number, c?: number): string {
// 	const result = (a + b + c) / 3;
// 	return "Result: " + result;
// }

// getAverage(10, 20, 30);
// getAverage(10, 20);

// function getAverage(a: number, b: number, c?: number): string {
// 	let total = a + b;
// 	let count = 2;

// 	if (typeof c !== 'undefined') {
// 		total += c;
// 		count++;
// 	}
	
// 	const result = total / count;
// 	return "Result: " + result;
// }

// function getAverage(...a: number[]): string {
// 	let total = 0;
// 	let count = 0;

// 	for (let i = 0; i < a.length; i++) {
// 		total += a[i];
// 		count++;
// 	}
	
// 	const result = total / count;
// 	return "Result: " + result;
// }

const getAverage = (...a: number[]): string => {
	let total = 0;
	let count = 0;

	for (let i = 0; i < a.length; i++) {
		total += a[i];
		count++;
	}
	
	const result = total / count;
	return "Result: " + result;
}

getAverage(10, 20, 30);
getAverage(10, 20);