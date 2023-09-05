// 1- Bir sayının 10-50 arasında olup olmadığını kontrol ediniz.
/*
var sayi = 60;

if (sayi >= 10 && sayi <= 50) {
	console.log("Sayi 10 ile 50 arasinda.");
}
else {
	console.log("Sayi 10 ile 50 arasinda degil!");
}
*/

// 2- Bir sayının pozitif tek sayı olup olmadığını kontrol ediniz.
/*
let sayi = -1;

if (sayi >= 0) {
	console.log("Sayi pozitiftir.");
}
else {
	console.log("Sayi negatiftir.");
}
*/

// 3- x, y, z sayılarının büyüklük karşılaştırmasını yapınız. (else if 'i araştırınız.)

/*
let x = 40;
let y = 50;
let z = 30;

if (x >= y && x >= z) {
	if (x > z && y > z && x != y) {
		console.log("x > y > z");
	}
	else if (x > z && z > y) {
		console.log("x > z > y");
	}
	else if ((x > z || x > y) && y == z) {
		console.log("x > y = z");
	}
	else if (x == y && y > z ) {
		console.log("x = y > z");
	}
	else if (x == z && z > y) {
		console.log("x = z > y");
	}
	else {
		console.log("x = y = z");
	}
}

else if (y >= x && y >= z) {
	if (y > x && x > z) {
		console.log("y > x > z");
	}
	else if (y > z && z > x) {
		console.log("y > z > x");
	}
	else if ((y > z || y > x) && x == z) {
		console.log("y > x = z");
	}
	else if (y == x && x > z ) {
		console.log("y = x > z");
	}
	else if (y == z && z > x) {
		console.log("y = z > x");
	}
	else {
		console.log("x = y = z");
	}
}

else if (z >= x && z >= y) {
	if (z > x && x > y) {
		console.log("z > x > y");
	}
	else if (z > y && y > x) {
		console.log("z > y > x");
	}
	else if ((z > y || z > x) && x == y) {
		console.log("z > x = y");
	}
	else if (z == x && x > y ) {
		console.log("z = x > y");
	}
	else if (z == y && y > x) {
		console.log("z = y > x");
	}
	else {
		console.log("x = y = z");
	}
}
*/

// 4- 2 vize (40%) ve 1 final(60%) notuna göre hesaplanan ortalama için;
// a- Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın.
/*
let vize1 = 40;
let vize2 = 50;
let final = 50;

let ortalama = ((vize1 * .2 + vize2 * .2) + (final * .6));

console.log(ortalama);
if (ortalama >= 50) {
	console.log("Geçti!");
}
else {
	console.log("Kaldı!");
}
*/

// b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.
/*
let vize1 = 90;
let vize2 = 80;
let final = 40;

let ortalama = ((vize1 * .2 + vize2 * .2) + (final * .6));

if (ortalama >= 50 && final >= 50) {
	console.log("Geçti!");
}
else {
	console.log("Kaldı!");
}
*/

// c- Finalden 70 alındığında ortalama 50' nin altında olsa bile dersten geçilsin.
let vize1 = 50;
let vize2 = 60;
let final = 60;

let ortalama = vize1 * 0.2 + vize2 * 0.2 + final * 0.6;

if (ortalama >= 50 || final >= 70) {
  console.log("Ortalamanız: " + ortalama + " Geçti!");
} else {
  console.log("Kaldı!");
}
