// https://www.w3schools.com/jsref/jsref_obj_date.asp

let simdi = new Date(); // simdiki tarih - saat
let sonuc;

// 			Get Methods
// https://www.w3schools.com/js/js_date_methods.asp
sonuc = simdi;
sonuc = simdi.getDate(); 			// Kacinci gun
sonuc = simdi.getDay(); 			// 0: pazar - 6: cumartesi
sonuc = simdi.getFullYear(); 	// Yil bilgisi
sonuc = simdi.getHours();			// Saat
sonuc = simdi.getTime();			// 1 Ocak 1970 UTC gece yarısından bu yana saklanan zaman değerini milisaniye cinsinden döndürür.


//  		Set Methods
// https://www.w3schools.com/js/js_date_methods_set.asp
simdi.setFullYear(2029);			// Yil bilgisini 2029 yapar
simdi.setMonth(12);						// 0: Ocak
simdi.setDate(5);							// Gun bilgisini 5 yapar.

// sonuc = simdi;
// console.log(sonuc);
// console.log(typeof(sonuc));


let dogumTarihi = new Date(1997, 4, 13);
let suan = new Date();
let yas;
let milisecond = suan - dogumTarihi;
let saniye = milisecond / 1000;
let dakika = saniye / 60;
let saat = dakika / 60;
let gun = saat / 24;
let hafta = gun / 7;
let ay = gun / 30;
let yil = ay / 12;


console.log(yil);

// yas = suan.getFullYear() - dogumTarihi.getFullYear();
// console.log(yas);
