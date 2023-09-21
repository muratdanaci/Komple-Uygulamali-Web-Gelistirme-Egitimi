// OOP: Nesne Tabanlı Programlama
// Object

let soru = {
	soruMetni: "Aşağıdakilerden hangisi JavaScript paket yönetim uygulamasıdır?",
	cevapSecenekleri: {
		a: "Node.js",
		b: "Typescript",
		c: "Npm"
	},
	dogruCevap: "c",
	cevabiKontrolEt: function (cevap) {
		return cevap === this.dogruCevap;
	}
}

let soru2 = {
	soruMetni: "Aşağıdakilerden hangisi .net paket yönetim uygulamasıdır?",
	cevapSecenekleri: {
		a: "Node.js",
		b: "Nuget",
		c: "Npm"
	},
	dogruCevap: "b",
	cevabiKontrolEt: function (cevap) {
		return cevap === this.dogruCevap;
	}
}

console.log(soru.soruMetni);
console.log(soru.cevabiKontrolEt("a"));
console.log(soru2.soruMetni);
console.log(soru2.cevabiKontrolEt("b"));

// Sinif, Constructor => nesne * 30
// ES5, ES6, ES7