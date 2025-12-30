const drumButton = document.querySelectorAll(".drum-pad");

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
    console.log(para)
    if (audio){
        audio.currentTime = 0;
        audio.play();
    }
    
}
drumButton.forEach(btn=>
    btn.addEventListener("click",(e)=>{
        playMusic(btn.textContent)}
    )
)
document.addEventListener("keydown",(e)=>{
    playMusic(e);
})