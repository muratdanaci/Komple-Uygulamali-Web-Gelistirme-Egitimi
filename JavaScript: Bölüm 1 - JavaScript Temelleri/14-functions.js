function selamlama(msg) {
	console.log(msg);
}

selamlama("Selam");
selamlama("Merhaba");
selamlama("İyi Günler");

function yasHesapla(dogumYili) {
	return(new Date().getFullYear() - dogumYili);
}

let muratYas = yasHesapla(1997);
let besteYas = yasHesapla(1996);

console.log(muratYas, besteYas);

function emekliligeKacYilKaldi(dogumYili, isim) {
	let yas = yasHesapla(dogumYili);
	let kalan_sene = 65 - yas;
	if (kalan_sene > 0) {
		console.log(`${isim} emeklilige ${kalan_sene} sene kaldi.`);
	}
	else {
		console.log(`${isim} emekliyim.`);
	}
}

emekliligeKacYilKaldi(1997, "Murat");