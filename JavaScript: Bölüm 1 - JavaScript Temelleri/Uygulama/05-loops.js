let sayilar = [1,5,7,15,3,25,12,24];
let toplam = 0;

// 1- sayilar listesindeki her bir elemanın karesini yazdırınız.
// for (let kare of sayilar) {
// 	console.log(Math.pow(kare, 2));
// }

// 2- sayilar listesindeki hangi sayılar 5' in katıdır?
// for (let beskati of sayilar) {
// 	if (beskati % 5 == 0)
// 		console.log(beskati);
// }

// 3- sayilar listesindeki çift sayıların toplamını bulunuz.
// for (let cift of sayilar) {
// 	if (cift % 2 == 0)
// 		toplam += cift;
// }
// console.log(toplam);

let urunler = ["iphone 12","samsung s22","iphone 13","samsung s23","samsung s20"];

// 4- urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.
// for (let buyuk of urunler) {
// 	console.log(buyuk.toUpperCase());
// }

// 5- urunler listesinde samsung geçen kaç ürün vardır?
// for (let samsung of urunler) {
// 	if (samsung.includes("samsung") == true)
// 		toplam += 1;
// }
// console.log(toplam);

let ogrenciler = [
	{"ad":"yiğit", "soyad": "bilgi", "notlar": [60,70,60]},
	{"ad":"ada", "soyad": "bilgi", "notlar": [80,70,80]},
	{"ad":"çınar", "soyad": "turan", "notlar": [10,20,60]}
];

// ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.

// https://pythontutor.com/render.html#code=let%20ogrenciler%20%3D%20%5B%0A%20%20%20%20%7B%22ad%22%3A%22yi%C4%9Fit%22,%20%22soyad%22%3A%20%22bilgi%22,%20%22notlar%22%3A%20%5B60,70,60%5D%7D,%0A%20%20%20%20%7B%22ad%22%3A%22ada%22,%20%22soyad%22%3A%20%22bilgi%22,%20%22notlar%22%3A%20%5B80,70,80%5D%7D,%0A%20%20%20%20%7B%22ad%22%3A%22%C3%A7%C4%B1nar%22,%20%22soyad%22%3A%20%22turan%22,%20%22notlar%22%3A%20%5B10,20,60%5D%7D%0A%5D%3B%0Alet%20toplam%20%3D%200%3B%0A%0Afor%20%28let%20ogrenci%20of%20ogrenciler%29%20%7B%0A%20%20%20%20let%20not_toplam%20%3D%200%3B%0A%20%20%20%20let%20deger%20%3D%200%3B%0A%20%20%20%20let%20not_ort%20%3D%200%3B%0A%20%20%20%20for%20%28let%20not%20of%20ogrenci.notlar%29%20%7B%0A%20%20%20%20%20%20%20%20not_toplam%20%2B%3D%20not%3B%0A%20%20%20%20%20%20%20%20deger%2B%2B%3B%0A%20%20%20%20%7D%0A%20%20%20%20not_ort%20%3D%20not_toplam%20/%20deger%3B%0A%0A%20%20%20%20console.log%28%60%24%7Bogrenci.ad%7D%20%24%7Bogrenci.soyad%7D%20ismindeki%20ogrenci%20not%20ortalamasi%3A%20%24%7B%28not_ort%29.toFixed%282%29%7D%60%29%3B%0A%20%20%20%20if%20%28not_ort%20%3E%3D%2050%29%0A%20%20%20%20%20%20%20%20console.log%28%22Ba%C5%9Far%C4%B1l%C4%B1.%22%29%3B%0A%20%20%20%20else%0A%20%20%20%20%20%20%20%20console.log%28%22Ba%C5%9Far%C4%B1s%C4%B1z.%22%29%3B%0A%7D&cumulative=false&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false

for (let ogrenci of ogrenciler) {
	let not_toplam = 0;
	let deger = 0;
	let not_ort = 0;
	for (let not of ogrenci.notlar) {
		not_toplam += not;
		deger++;
	}
	not_ort = not_toplam / deger;

	console.log(`${ogrenci.ad} ${ogrenci.soyad} ismindeki ogrenci not ortalamasi: ${(not_ort).toFixed(2)}`);
	if (not_ort >= 50)
		console.log("Başarılı.");
	else
		console.log("Başarısız.");
}

// tüm öğrencilerin not ortalaması kaçtır?
// for (let ogrenci of ogrenciler) {
// 	for (let not of ogrenci.notlar) {
// 			toplam += not;
// 	}
// }
// console.log(parseInt(toplam/9));