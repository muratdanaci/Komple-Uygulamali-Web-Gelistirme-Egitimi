// OOP: Nesne Tabanlı Programlama
// Object

// let soru = {
// 	soruMetni: "Aşağıdakilerden hangisi JavaScript paket yönetim uygulamasıdır?",
// 	cevapSecenekleri: {
// 		a: "Node.js",
// 		b: "Typescript",
// 		c: "Npm"
// 	},
// 	dogruCevap: "c",
// 	cevabiKontrolEt: function (cevap) {
// 		return cevap === this.dogruCevap;
// 	}
// }

// let soru2 = {
// 	soruMetni: "Aşağıdakilerden hangisi .net paket yönetim uygulamasıdır?",
// 	cevapSecenekleri: {
// 		a: "Node.js",
// 		b: "Nuget",
// 		c: "Npm"
// 	},
// 	dogruCevap: "b",
// 	cevabiKontrolEt: function (cevap) {
// 		return cevap === this.dogruCevap;
// 	}
// }


// Sinif, Constructor => nesne * 30
// ES5, ES6, ES7

function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
	this.soruMetni = soruMetni;
	this.cevapSecenekleri = cevapSecenekleri;
	this.dogruCevap = dogruCevap;
	this.cevabiKontrolEt = function (cevap) {
		return cevap === this.dogruCevap;
	}
}

let soru1 = new Soru("Aşağıdakilerden hangisi JavaScript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c");
let soru2 = new Soru("Aşağıdakilerden hangisi .net paket yönetim uygulamasıdır?", {	a: "Node.js",	b: "Nuget",	c: "Npm" }, "b" );

let sorular = [
	new Soru("Aşağıdakilerden hangisi js paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
	new Soru("Aşağıdakilerden hangisi JavaScript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
	new Soru("Aşağıdakilerden hangisi JavaScript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
	new Soru("Aşağıdakilerden hangisi JavaScript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c")
]

console.log(soru1.soruMetni);
console.log(soru1.dogruCevap);
console.log(soru2.soruMetni);
console.log(soru2.dogruCevap);

console.log(soru1.cevabiKontrolEt("c"));