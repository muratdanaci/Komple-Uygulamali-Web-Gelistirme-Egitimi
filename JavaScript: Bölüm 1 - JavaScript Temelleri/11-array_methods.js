// https://www.w3schools.com/js/js_array_methods.asp
// https://www.w3schools.com/jsref/jsref_obj_array.asp

let aile = ["Ferhat", "Yildiz", "Bahtiyar", "Murat"];

sonuc = aile.length;

// array to string
sonuc = aile.toString();
sonuc = aile.join(" ");

// eleman silme
// sonuc = aile.pop();					// son eleman silinir ve silinen eleman geri dondurulur.
// sonuc = aile.shift();			  // ilk eleman silinir ve silinen eleman geri dondurulur.

// eleman ekleme
// sonuc = aile.push("Beste");	// dizinin sonuna eleman ekler.
sonuc = aile.unshift("Beste");	// dizinin basina eleman ekler.

let markalar1 = ["mazda", "toyota"];
let markalar2 = ["opel", "renault"];
let markalar3 = ["mercedes", "wolksvagen"];

// sonuc = markalar1.concat(markalar2, markalar3); // dizileri birlestirir. yeni degiskene atar orjinali degismez.

sonuc = markalar1.splice(0, 1, "bmw", "audi"); // ilk indexteki elemani siler ve bmw ve audiyi ekler (silmek, eklemek zorunlu degil).

console.log(sonuc);
console.log(markalar1);
