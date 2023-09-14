var isim = "Murat"; // Global Scope
const adres = "Zonguldak";

adres = "Istanbul"; //Hata

function yazdir() {
	var isim = "Beste";
	var yas = 26;
	console.log("Function scope: ", isim, yas);
}

if (true) {
	let isim = "Yildiz"; //block scope
	console.log(isim);
}

console.log(isim);
yazdir();

// fonksiyonlar kendi scope alanlarini olusturur.
// block icerisinde yeni bir scope olusmaz. (let, const)