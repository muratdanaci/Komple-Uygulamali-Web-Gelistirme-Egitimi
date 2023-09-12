let sonuc;

// 1- "Elma,Armut,Muz,Çilek" elemanlarına sahip bir dizi oluşturunuz.
let fruits = ["Elma", "Armut", "Muz", " Çilek"];

// 2- Dizi kaç elemanlıdır?
sonuc = fruits.length;

// 3- Dizinin ilk ve son elemanı nedir?
sonuc = fruits[0];
sonuc = fruits[fruits.length - 1];

// 4- Elma dizinin bir elemanımıdır?
sonuc = fruits.includes("Elma");

// 5- Kiraz meyvesini listenin sonuna ekleyiniz.
// sonuc = fruits[fruits.length] = "Kiraz";
sonuc = fruits.push("Kiraz");

// 6- Dizinin son 2 elemanını siliniz.
sonuc = fruits.splice(fruits.length - 2, 2);

// 7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.
    /*
        Öğrenci 1: Yiğit Bilgi 2010 (70,60,80)
        Öğrenci 2: Ada Bilgi 2012   (80,80,90)
        Öğrenci 3: Ahmet Turan 2009 (60,60,70)
    */

let ogr1 = [
	"Yiğit",
	"Bilgi",
	2010,
	[70, 60, 80]
];

let ogr2 = [
	"Ada",
	"Bilgi",
	2012,
	[80, 80, 90]
];

let ogr3 = [
	"Ahmet",
	"Turan",
	2009,
	[60, 60, 70]
];

let yilimiz = new Date().getFullYear();

let ogr1Yas = yilimiz - ogr1[2];
let ogr2Yas = yilimiz - ogr2[2];
let ogr3Yas = yilimiz - ogr3[2];

let ogr1Ort = (ogr1[3][0] + ogr1[3][1] + ogr1[3][2]) / 3;
let ogr2Ort = (ogr2[3][0] + ogr2[3][1] + ogr2[3][2]) / 3;
let ogr3Ort = (ogr3[3][0] + ogr3[3][1] + ogr3[3][2]) / 3;


// console.log(fruits);
// console.log(sonuc);

console.log(ogr1Yas);
console.log(ogr1Ort);
console.log(ogr2Yas);
console.log(ogr2Ort);
console.log(ogr3Yas);
console.log(ogr3Ort);