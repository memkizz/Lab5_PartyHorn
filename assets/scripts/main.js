
document.getElementById("volume-number").addEventListener("input", changeVolumeNumber);
document.getElementById("volume-slider").addEventListener("input", changeVolumeSlider);
document.getElementById("radio-air-horn").addEventListener("input", clickAirHorn);
document.getElementById("radio-car-horn").addEventListener("input", clickCarHorn);
document.getElementById("radio-party-horn").addEventListener("input", clickPartyHorn);
document.getElementById("honk-btn").addEventListener("click", function(event){
    event.preventDefault();
    var audio = document.getElementById("horn-sound");
    if (audio.volume !=0){
        audio.play();
    }
});




function changeVolumeNumber() {
    var volume = document.getElementById("volume-number").value;
    var audio = document.getElementById("horn-sound");
    document.getElementById("volume-slider").value = volume;
    var audvolume = (volume/parseFloat(100)).toFixed(2);
    audio.volume = audvolume;
    if(volume ==0){
    document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
    } else if(volume>0 && volume <34){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";

    } else if(volume>33 && volume <67){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
    }
    else{
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
    }

}
function changeVolumeSlider() {
    var volume = document.getElementById("volume-slider").value;
    var audio = document.getElementById("horn-sound");
    document.getElementById("volume-number").value = volume;
    var audvolume = (volume/parseFloat(100)).toFixed(2);
    audio.volume = audvolume;
    if(volume ==0){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
        } else if(volume>0 && volume <34){
            document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
    
        } else if(volume>33 && volume <67){
            document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
        }
        else{
            document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
        }
}
function clickAirHorn(){
    document.getElementById("horn-sound").src = "./assets/media/audio/air-horn.mp3";
    document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg";

}
function clickCarHorn(){
    document.getElementById("horn-sound").src = "./assets/media/audio/car-horn.mp3";
    document.getElementById("sound-image").src = "./assets/media/images/car.svg";

}
function clickPartyHorn(){
    document.getElementById("horn-sound").src = "./assets/media/audio/party-horn.mp3";
    document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg";
}
