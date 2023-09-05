/* 
    1- İki öğrencinin aşağıdaki bilgilerini değişkenler içerisinde saklayınız.

        öğrenci 1: 
            isim                : ada bilgi
            doğum tarihi        : 2012
            matematik notları   : 70, 70, 80

        öğrenci 2: 
            isim                : yiğit bilgi
            doğum tarihi        : 2010
            matematik notları   : 40, 40, 50

    2- Öğrencilerinin yaş bilgilerini değişkende tutunuz.
    3- Öğrencilerinin ders ortalama notunu değişkende saklayınız.
    4- Öğrencilerinin 50 geçme notuna göre başarı durumlarını değişkende saklayınız.
*/

let suankiYil = new Date().getFullYear();

let ogrenciAd1 = "Ada";
let ogrenciSoyad1 = "Bilgi";
let dogum1 = 2012;
let ogrYas1 = parseInt(suankiYil - dogum1);
let notOrt1 = parseInt((70 + 70 + 80) / 3);

let ogrenciAd2 = "Yiğit";
let ogrenciSoyad2 = "Bilgi";
let dogum2 = 2010;
let ogrYas2 = parseInt(suankiYil - dogum2);
let notOrt2 = parseInt((40 + 40 + 50) / 3);


let ogrenci1GectiMi = (notOrt1 >= 50);
let ogrenci2GectiMi = (notOrt2 >= 50);

console.log(ogrenciAd1+ " " + ogrenciSoyad1 + " " + ogrYas1 + " yasinda ve" + " dersi gecme bilgisi: " + ogrenci1GectiMi);
console.log(ogrenciAd2 + " " + ogrenciSoyad2 + " " + ogrYas2 + " yasinda ve" + " dersi gecme bilgisi: " + ogrenci2GectiMi);
