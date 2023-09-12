// dict, json
// https://www.w3schools.com/js/js_objects.asp

let kullaniciA = {
	"ad": "Murat",
	"soyad": "Danaci",
	"yas": 26,
	"adres": {
		"il": "Zonguldak",
		"ilce": "Kilimli"
	},
	"hobiler": ["Spor", "Kamp"]
}

let kullaniciB = {
	"ad": "Beste",
	"soyad": "Demirkesen",
	"yas": 27,
	"adres": {
		"il": "Zonguldak",
		"ilce": "Merkez"
	},
	"hobiler": ["Resim", "Müzik"]
}

let sonuc;

sonuc = kullaniciA.ad;
sonuc = kullaniciA.soyad;
sonuc = kullaniciA["yas"];
sonuc = kullaniciA.adres.il;
sonuc = kullaniciA.adres.ilce;
sonuc = kullaniciA.hobiler[0];
sonuc = kullaniciA.hobiler[1];

let kullanilar = [
	kullaniciA,
	kullaniciB
];

let urunler = [
	{
		"urun_adi": "Samsung S22",
		"urun_fiyat": 13000
	},
	{
		"urun_adi": "Samsung S23",
		"urun_fiyat": 15000

	}
]

sonuc = urunler[0].urun_adi;

sonuc = kullanilar[1].ad;

console.log(sonuc);