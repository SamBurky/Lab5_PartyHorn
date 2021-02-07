// main.js

// TODO
function playHorn(){
  event.preventDefault();
  document.getElementById("horn-sound").play();
}
 
/*
function changeSound() {
  changeSoundFile();
  changeSoundImage();
}
function changeSoundFile() {
    if(document.getElementById("radio-air-horn").checked){
        document.getElementById("horn-sound").src = "./assets/media/audio/air-horn.mp3";
    }
    if(document.getElementById("radio-car-horn").checked){
        document.getElementById("horn-sound").src = "./assets/media/audio/car-horn.mp3";
        
    }
    if(document.getElementById("radio-party-horn").checked){
        document.getElementById("horn-sound").src = "./assets/media/audio/party-horn.mp3";
    }
}
function changeSoundImage () {
    if(document.getElementById("radio-air-horn").checked) {
        document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg";
    }
    if(document.getElementById("radio-car-horn").checked){
        document.getElementById("sound-image").src = "./assets/media/images/car.svg";
    }
    if(document.getElementById("radio-party-horn").checked){
        document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg";
    }
  
function changeIcon() {
  let currentVolume = (document.getElementById("horn-sound").volume);
  currentVolume = currentVolume * 100;
  
  
    if(currentVolume >= 67 && currentVolume <= 100){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
        document.getElementById("honk-btn").disabled = false;
    }
    if(currentVolume >= 34 && currentVolume <= 66){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
        document.getElementById("honk-btn").disabled = false;
    }
    if(currentVolume > 0 && currentVolume <= 33){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
        document.getElementById("honk-btn").disabled = false;
    }
    if(currentVolume == 0){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
        document.getElementById("honk-btn").disabled = true;
    }
}
 
function changeVolume(){
    document.getElementById("horn-sound").volume = (document.getElementById("volume-number").value) / 100;
    document.getElementById("volume-slider").value = document.getElementById("volume-number").value;
    changeIcon();
}
*/
document.getElementById("honk-btn").addEventListener("click",playHorn);
document.getElementById("volume-slider").addEventListener("change",changeVolume);
