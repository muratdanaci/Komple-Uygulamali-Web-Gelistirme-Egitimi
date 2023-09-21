// OOP: Nesne Tabanlı Programlama
function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
	this.soruMetni = soruMetni;
	this.cevapSecenekleri = cevapSecenekleri;
	this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
	return cevap === this.dogruCevap;
}

let soru1 = new Soru("Aşağıdakilerden hangisi JavaScript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c");
let soru2 = new Soru("Aşağıdakilerden hangisi .net paket yönetim uygulamasıdır?", {	a: "Node.js",	b: "Nuget",	c: "Npm" }, "b" );

let sorular = [
	new Soru("1-Aşağıdakilerden hangisi JavaScript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
	new Soru("2-Aşağıdakilerden hangisi JavaScript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
	new Soru("3-Aşağıdakilerden hangisi JavaScript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
	new Soru("4-Aşağıdakilerden hangisi JavaScript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c")
]

function Quiz(sorular) {
	this.sorular = sorular;
	this.soruIndex = 0;
}

Quiz.prototype.soruGetir = function() {
	return this.sorular[this.soruIndex];
}

const quiz = new Quiz(sorular);

document.querySelector(".btn-start").addEventListener("click", function(){
	if (quiz.sorular.length != quiz.soruIndex){
		console.log(quiz.soruGetir());
		quiz.soruIndex++;
	} else {
		console.log("Quiz bitti");
	}
})
