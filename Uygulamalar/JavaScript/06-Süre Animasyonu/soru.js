function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
	this.soruMetni = soruMetni;
	this.cevapSecenekleri = cevapSecenekleri;
	this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
	return cevap === this.dogruCevap
}

let sorular = [
	new Soru("1-Hangisi JavaScript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm", d: "Nuget" }, "c"),
	new Soru("2-Hangisi Front-End kapsamında değerlendirilmez?", { a: "Css", b: "HTML", c: "JavaScript", d: "Sql" }, "d"),
	new Soru("3-Hangisi Back-End kapsamında değerlendirilir?", { a: "Node.js", b: "Typescript", c: "Angular", d: "React" }, "a"),
	new Soru("4-Hangisi JavaScript programlama dilini kullanmaz?", { a: "React", b: "Angular", c: "Vuejs", d: "ASP.NET" }, "d")
];