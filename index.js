let previous = document.querySelector('#pre');
let play = document.querySelector('.play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');


//All songs list
let All_song = [
	{
		name: "Be Together",
		path: "./mp3/Zaza - Be Together [NCS Release].mp3",
		img: "https://linkstorage.linkfire.com/medialinks/images/ea9cc0ae-c997-4ef8-aa06-8c0686b644b9/artwork-440x440.jpg",
		singer: "Zaza"
	},
	{
		name: "Healing",
		path: "./mp3/Clarx & Moe Aly - Healing [NCS Release].mp3",
		img: "https://linkstorage.linkfire.com/medialinks/images/a83cbd07-fa54-40f3-a0e9-37e4f34bd2d7/artwork-440x440.jpg",
		singer: "Clarx & Moe Aly"
	},
	{
		name: "Feelings",
		path: "./mp3/Cytrax - Feelings (feat. Émilie Rachel) [NCS Release].mp3",
		img: "https://linkstorage.linkfire.com/medialinks/images/7b698b51-2560-455a-a4e5-d68da181bb92/artwork-440x440.jpg",
		singer: "Cytrax"
	},
	{
		name: "Memory",
		path: "./mp3/Elektronomia & RUD - Memory [NCS Release].mp3",
		img: "https://linkstorage.linkfire.com/medialinks/images/0bb9a60b-a6b0-4820-bb4c-0bde3f34f0ab/artwork-440x440.jpg",
		singer: "Elektronomia & RUD"
	},
	{
		name: "Don't Hold Me Down",
		path: "./mp3/Heuse & Woolley - Don't Hold Me Down (Feat. TARYN) [NCS Release].mp3",
		img: "https://linkstorage.linkfire.com/medialinks/images/ebd811eb-b6ba-442a-8bfd-54825a542314/artwork-440x440.jpg",
		singer: "Heuse & Woolley"
	},
	{
		name: "Rewind",
		path: "./mp3/More Plastic - Rewind [NCS Release].mp3",
		img: "https://linkstorage.linkfire.com/medialinks/images/6d7a1bca-0284-4b55-a9db-16ce8a04924d/artwork-440x440.jpg",
		singer: "More Plastic"
	},
	{
		name: "Adventure",
		path: "./mp3/JJD - Adventure [NCS Release].mp3",
		img: "https://linkstorage.linkfire.com/medialinks/images/6d7a1bca-0284-4b55-a9db-16ce8a04924d/artwork-440x440.jpg",
		singer: "JJD"
	},
	{
		name: "Jumbo",
		path: "./mp3/Alex Skrindo - Jumbo [NCS Release].mp3",
		img: "https://linkstorage.linkfire.com/medialinks/images/ea9cc0ae-c997-4ef8-aa06-8c0686b644b9/artwork-440x440.jpg",
		singer: "Alex Skrindo"
	},
	{
		name: "Make Me Move (feat. Karra) (Tobu Remix)",
		path: "./mp3/Culture Code - Make Me Move (feat.  Karra) [NCS Release].mp3",
		img: "https://linkstorage.linkfire.com/medialinks/images/39b46491-aa4d-4726-b2e6-7497fb87f1f0/artwork-440x440.jpg",
		singer: "Culture Code, KARRA, Tobu"
	},
	{
		name: "Mortals (feat. Laura Brehm)",
		path: "./mp3/Warriyo - Mortals (feat. Laura Brehm) [NCS Release].mp3",
		img: "https://linkstorage.linkfire.com/medialinks/images/21d96fe2-ada7-48ff-8a4d-d395eb35c0af/artwork-440x440.jpg",
		singer: "Warriyo, Laura Brehm"
	},
	{
		name: "Flares",
		path: "./mp3/NIVIRO - Flares [NCS Release].mp3",
		img: "https://linkstorage.linkfire.com/medialinks/images/03d4024d-8511-4b48-8804-9f64f10106ba/artwork-440x440.jpg",
		singer: "NIVIRO"
	}

];

let timer;
let autoplay = 0;

let index = Math.floor(Math.random() * All_song.length);
console.log(index);
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


// All functions


// function load the track
function load_track(index) {
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index].path;
	title.innerHTML = All_song[index].name;
	track_image.src = All_song[index].img;
	artist.innerHTML = All_song[index].singer;
	track.load();

	timer = setInterval(range_slider, 1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index + 1;
}

load_track(index);




//mute sound function
function mute_sound() {
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
function justplay() {
	if (Playing_song == false) {
		playsong();

	} else {
		pausesong();
	}
}


// reset song slider
function reset_slider() {
	slider.value = 0;
}

// play song
function playsong() {
	track.play();
	Playing_song = true;
	play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong() {
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// next song
function next_song() {
	if (index < All_song.length - 1) {
		index += 1;
		load_track(index);
		playsong();
	} else {
		index = 0;
		load_track(index);
		playsong();

	}
}


// previous song
function previous_song() {
	if (index > 0) {
		index -= 1;
		load_track(index);
		playsong();

	} else {
		index = All_song.length;
		load_track(index);
		playsong();
	}
}


// change volume
function volume_change() {
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration() {
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch() {
	if (autoplay == 1) {
		autoplay = 0;
		auto_play.style.background = "rgba(255,255,255,0.2)";
	} else {
		autoplay = 1;
		auto_play.style.background = "#1f5dea";
	}
}


function range_slider() {
	let position = 0;

	// update slider position
	if (!isNaN(track.duration)) {
		position = track.currentTime * (100 / track.duration);
		slider.value = position;
	}


	// function will run when the song is over
	if (track.ended) {
		play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
		if (autoplay == 1) {
			index += 1;
			load_track(index);
			playsong();
		}
	}
}