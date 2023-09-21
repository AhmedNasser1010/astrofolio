// background music
const bgAudio = new Audio("../public/sounds/background-sound.mp3");

bgAudio.loop = true;
bgAudio.volume = 0.1;
bgAudio.autoplay = true;
// ^background music^

// sound click
let clickCounter = 0;
const sound1 = new Audio("../public/sounds/click-sound-1.mp3");
const sound2 = new Audio("../public/sounds/click-sound-2.mp3");
const sound3 = new Audio("../public/sounds/click-sound-3.mp3");
const sound4 = new Audio("../public/sounds/click-sound-4.mp3");
const sound5 = new Audio("../public/sounds/click-sound-5.mp3");
const sound6 = new Audio("../public/sounds/click-sound-6.mp3");
const sounds = [sound1, sound2, sound3, sound4, sound5, sound6];

document.addEventListener("click", e => {
	sounds[clickCounter].play();
	clickCounter++;
	clickCounter >= sounds.length ? clickCounter = 0 : null;
})
// ^sound click^

export {
	bgAudio
}