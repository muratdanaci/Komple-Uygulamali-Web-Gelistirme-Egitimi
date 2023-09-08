let sonuc;

// https://www.w3schools.com/jsref/jsref_obj_math.asp

sonuc = 10;
sonuc = "10";
sonuc = Number("10");
sonuc = parseInt("10.6");
sonuc = parseFloat("10.6");
sonuc = parseInt("10a");
sonuc = parseInt("a10"); //NaN (not a number)

sonuc = isNaN("10"); //false

let sayi = 15.12345667;

sonuc = sayi.toPrecision(5); // 123ten sonra gelen sayi 5 ve 5ten buyukse 3 sayisini 4 yapar.
sonuc = sayi.toFixed(5); // 6. sayiya bakar 5 ve uzeriyle yuvarlar. ondalik tarafi 5 basamakli.

sonuc = Math.round(2.4); // yuvarlama islemi yapar 
sonuc = Math.round(2.6); // yuvarlama islemi yapar 
sonuc = Math.ceil(2.2); // her zaman yukari yuvarlar
sonuc = Math.floor(2.7); // her zaman asagi yuvarlar
sonuc = Math.sqrt(36); // 36 nin karakokunu alir
sonuc = Math.pow(6,3); // 6nin 3uncu kuvvetini alir
sonuc = Math.abs(-20); // mutlak deger alir
sonuc = Math.min(5, 7, 4, 2, 8, 9, 1, 6); // min degeri alir
sonuc = Math.max(5, 7, 4, 2, 8, 9, 1, 26); // max degeri alir
sonuc = Math.random(); // Method - rastgele sayi verir. 0 ile 1 arasinda ondalikli verir
sonuc = Math.random() * 10; // Method - rastgele sayi verir. 0 ile 10 arasinda ondalikli sayi verir
sonuc = Math.floor(Math.random() * 100) + 1; // 1 ile 101 arasinda tam sayi verir

console.log(typeof(sonuc));
console.log(sonuc);