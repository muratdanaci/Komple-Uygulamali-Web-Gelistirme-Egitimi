let url = "https://www.sadikturan.com";
let kursAdi = "Komple Web Geliştirme Kursu";

// 1- url kaç karakterlidir?

// let sonuc = url.length;

// 2- kursAdi kaç kelimeden oluşmaktadır?

// let words = kursAdi.split(" ");
// let sonuc = words.length;

// 3- url https ile mi başlıyor?

// let sonuc = url.startsWith("https");

// 4- kursAdi içerisinde Eğitimi kelimesi var mı?

// if (kursAdi.indexOf("Eğitimi") > -1)
// 	console.log("Evet var.");
//  else 
// 	console.log("Hayir yok.");

// 5- url ve kursAdi değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturunuz.
// https://www.sadikturan.com/komple-web-gelistirme-kursu

kursAdi = kursAdi.toLowerCase();
kursAdi = kursAdi.replaceAll(" ", "-");
kursAdi = kursAdi.replaceAll("ş", "s").replaceAll("ı", "i").replaceAll("ğ","g");

let sonuc = `${url}/${kursAdi}`;

console.log(sonuc);