let ad = "Murat";
let soyad = "Danaci";
let yas = new Date().getFullYear() - 1964;
let sehir = "Zonguldak";

// let mesaj = "Benim adim " + ad + " ve soyadim " + soyad + ". " + sehir + '\'da yasiyorum. ' + "Emeklilige " + (65 - yas) + " yilim kaldi." 


// Ternary operators
let emeklilik = (65 - yas > 0) ? "Emekliligime " + (65 - yas) + " sene kaldi." : "Emekliyim.";

// Backtick
let mesaj = `Benim adim ${ad} ve soyadim ${soyad}. ${sehir}'da yasiyorum. ${emeklilik}`;  

console.log(mesaj);
