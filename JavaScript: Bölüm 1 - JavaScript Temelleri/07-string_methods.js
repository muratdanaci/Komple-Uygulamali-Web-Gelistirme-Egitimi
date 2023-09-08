let kursAdi = "Komple Uygulamali Web Gelistirme Egitimi.";

let sonuc;

// https://www.w3schools.com/js/js_string_methods.asp
// https://www.w3schools.com/jsref/jsref_obj_string.asp

sonuc = kursAdi.toLowerCase();
sonuc = kursAdi.toUpperCase();

sonuc = kursAdi.length;

sonuc = kursAdi.slice(0, 6);
sonuc = kursAdi.slice(10);
sonuc = kursAdi.slice(-10);
sonuc = kursAdi.slice(-15, -10);

sonuc = kursAdi.substring(0, 6);
sonuc = kursAdi.substring(10);

sonuc = kursAdi.replace("Egitimi", "Kursu");

sonuc = kursAdi.trim();
sonuc = kursAdi.trimEnd();
sonuc = kursAdi.trimStart();

sonuc = kursAdi.indexOf("Web");

sonuc = kursAdi.split(" ");
sonuc = kursAdi.split(" ")[0];
sonuc = kursAdi.split(" ")[1];
sonuc = kursAdi.split(" ")[2][0];


console.log(sonuc);