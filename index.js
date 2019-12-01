document.addEventListener("keydown", (keyPressed) => {
    if(document.getElementsByClassName(keyPressed.key).length){
        document.getElementsByClassName(keyPressed.key)[0].style.color = 'blue';
        playSound(keyPressed.key);
    }
});

document.addEventListener("keyup", (keyPressed) => {
    removeAndReApplyStyles(keyPressed.key);
});

var drumButtons = document.querySelectorAll('.drum');

drumButtons.forEach((button) => {
    var buttonKey = button.textContent;
    
    button.addEventListener('click', () => {
        removeAndReApplyStyles(buttonKey);
        playSound(buttonKey)
    });
});

function removeAndReApplyStyles(styleKey){
    if(document.getElementsByClassName(styleKey).length){
        var styleToApply = styleKey + "drum";
    
        document.getElementsByClassName(styleKey)[0].style.cssText = null
        document.getElementsByClassName(styleKey)[0].classList.add(styleToApply);
    }
}

function playSound(soundKey){

    var soundToPlayPath;
    switch (soundKey) {
        case 'w':
            soundToPlayPath = 'tom-1'
            break;
        case 'a':
            soundToPlayPath = 'tom-2'
            break;
        case 's':
            soundToPlayPath = 'tom-3'
            break;
        case 'd':
            soundToPlayPath = 'tom-4'
            break;
        case 'j':
            soundToPlayPath = 'snare'
            break;
        case 'k':
            soundToPlayPath = 'crash'
            break;
        case 'l':
            soundToPlayPath = 'kick-bass'
            break;
        default:
            
            break;
    }

    if(soundToPlayPath)
    {
        var audio = new Audio(`./sounds/${soundToPlayPath}.mp3`);
        audio.play();
    }
}