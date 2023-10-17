class Music {
	constructor(title, singer, img, file) {
		this.title = title;
		this.singer = singer;
		this.img = img;
		this.file = file;	
	}
	
	getName() {
		return this.title + " - " + this.singer;
	}
}

const musicList = [
	new Music("Numb", "Linkin Park", "numb.png", "Linkin Park - Numb.mp3"),
	new Music("In The End", "Linkin Park", "intheend.png", "Linkin Park -  In The End.mp3"),
	new Music("What I've Done", "Linkin Park", "whativedone.png", "Linkin Park - What Ive Done.mp3")
];