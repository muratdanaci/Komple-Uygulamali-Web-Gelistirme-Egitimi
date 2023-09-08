// https://www.w3schools.com/js/js_arrays.asp


// let urun1 = "iphone 13";
// let urun2 = "iphone 14";
// let urun3 = "iphone 15";

let urunler = ["iphone 13", "iphone 14", "iphone 15"];
let fiyatlar = [20000, 30000, 500000];
let renkler = ["gold", "siyah", "beyaz"];

let urun1 = ["iphone 13", 20000, "gold"];
let urun2 = [];
urun2[0] = "iphone 14";
urun2[1] = 30000;
urun2[2] = "siyah";

let urun3 = [
		"iphone 15",
		50000,
		["siyah", "beyaz", "mavi"]
	];

	console.log(urun3[2][1]);
	console.log(typeof(urun3[2][1]));




// console.log(urunler[0]);
// console.log(urunler[1]);
// console.log(urunler[2]);


let kursAdi = "Komple Web Gelistirme Egitimi";
// console.log(kursAdi[7]);
console.log(kursAdi.split(" "));
console.log(kursAdi.split(" ")[1]);

