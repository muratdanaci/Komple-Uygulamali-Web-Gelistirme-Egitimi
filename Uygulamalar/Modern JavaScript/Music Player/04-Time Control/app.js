const container = document.querySelector(".container");
const image = document.querySelector("#music-image");
const title = document.querySelector("#music-details .title");
const singer = document.querySelector("#music-details .singer");
const prev = document.querySelector("#controls #prev");
const play = document.querySelector("#controls #play");
const next = document.querySelector("#controls #next");
const currentTime = document.querySelector("#current-time");
const duration = document.querySelector("#duration");
const progressBar = document.querySelector("#progress-bar");


const player = new MusicPlayer(musicList);

window.addEventListener("load", () => {
	let music = player.getMusic();
	displayMusic(music);
});

function displayMusic(music) {
	title.innerText = music.getName();
	singer.innerText = music.singer;
	image.src = "img/" + music.img;
	audio.src = "mp3/" + music.file
}

prev.addEventListener("click", () => {
	prevMusic();
});

play.addEventListener("click", () => {
	const isMusicPlay = container.classList.contains("playing");
	isMusicPlay ? pauseMusic() : playMusic();
});

next.addEventListener("click", () => {
	nextMusic();
});

function prevMusic() {
	player.prev();
	let music = player.getMusic();
	displayMusic(music);
	playMusic();
}

function playMusic() {
	container.classList.add("playing");
	play.classList = "fa-solid fa-pause";
	audio.play();
}

function pauseMusic() {
	container.classList.remove("playing");
	play.classList = "fa-solid fa-play";
	audio.pause();
}

function nextMusic() {
	player.next();
	let music = player.getMusic();
	displayMusic(music);
	playMusic();
}

const calculateTime = (seconds) => {
	const minute = Math.floor(seconds / 60);
	const second = Math.floor(seconds % 60);
	const updateSecond = second < 10 ? `0${second}` : second;
	return `${minute}:${updateSecond}`;
}

audio.addEventListener("loadedmetadata", () => {
	duration.textContent = calculateTime(audio.duration);
	progressBar.max = Math.floor(audio.duration);
})

audio.addEventListener("timeupdate", () => {
	progressBar.value = Math.floor(audio.currentTime);
	currentTime.textContent = calculateTime(progressBar.value);
})

progressBar.addEventListener("input", () => {
	currentTime.textContent = calculateTime(progressBar.value);
	audio.currentTime = progressBar.value;
})