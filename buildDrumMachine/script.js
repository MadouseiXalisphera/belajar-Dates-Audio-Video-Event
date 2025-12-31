const drumButton = document.querySelectorAll(".drum-pad");
const display = document.querySelector("#display");


const bankSwitch = document.querySelector("#bank-switch");
const outputBank = document.querySelector("#output-bank");
outputBank.textContent="Drum"

const powerSwitch = document.querySelector("#power-switch");
const outputPower = document.querySelector("#output-power");
outputPower.textContent="OFF"

const volume = document.querySelector("#volume-value");
let globalVolume = 0.3;

function playMusic (keys) {
    const huruf = keys.key;
    const btnId = keys;
    
    let para ;
    if(huruf){
         para = huruf.toUpperCase();
    }else if (btnId) {
         para = btnId.toUpperCase().trim();
    }
    const audio = document.getElementById(para);
    const textTampilan = audio.parentElement.id;
    if (audio){
        audio.currentTime = 0;
        audio.play();
        audio.volume = globalVolume;
        display.textContent = textTampilan.replace(/-|_/g," ")

    }
}

function onOf(){
    if(powerSwitch.classList.contains("active")){
        powerSwitch.classList.remove("active");
        outputPower.textContent="OFF"
    }else {
        powerSwitch.classList.add("active");
        outputPower.textContent="ON"
    }
        
}

function changeMode(){
    if(bankSwitch.classList.contains("active")){
        bankSwitch.classList.remove("active");
        outputBank.textContent="Drum"
    }else {
        bankSwitch.classList.add("active");
        outputBank.textContent="Piano"
    }

        
}

function displayVol (val){
    const pembulatan = Math.floor(val.target.value*100)
    globalVolume = val.target.value
    display.textContent= pembulatan;
}


drumButton.forEach(btn=>
    btn.addEventListener("click",(e)=>{
        playMusic(btn.textContent)}
    )
)
document.addEventListener("keydown",(e)=>{
    playMusic(e);
})

powerSwitch.addEventListener("click",()=>{
   onOf()
})

bankSwitch.addEventListener("click",()=>{
   changeMode()
})

volume.addEventListener("click",(e)=>{
    displayVol(e);
})