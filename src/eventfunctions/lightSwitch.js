var lightswitch = new Howl({
    src: ['src/audiofiles/LightSwitchSound.mp3'],
    html5: true,
    loop: false
});



function setClickingSound(event) {
	
	Howler.volume(0.7);
	
    lightswitch.play(); 
	
	
	
	
}
