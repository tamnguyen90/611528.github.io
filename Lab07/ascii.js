const SEPARATOR = "=====\n";
const fontSizes = {
    "Tiny": "7pt",
    "Small": "10pt",
    "Medium": "12pt",
    "Large": "16pt",
    "Extra Large": "24pt",
    "XXL": "32pt"
};

let animationStyle = "Blank";
let timer = 250;
let count = 0;
var interval;
let isAnimate = false;

window.onload = function() {
    document.getElementById("start").onclick = startAnimation;
    document.getElementById("stop").onclick = stopAnimation;
    document.getElementById("animation").onchange = changeAnimationStyle;
    document.getElementById("fontsize").onchange = changeFontSize;
    document.getElementById("turbo").onclick = changeAnimationSpeed;


}

function startAnimation() {
    isAnimate = true;
    const animation = ANIMATIONS[animationStyle];
    if (animation && animation.length > 0) {
        const frames = animation.split(SEPARATOR);
        if (frames && frames.length > 0) {
             interval = setInterval(function(){
                document.getElementById("text-area").value = frames[count];
                if (count == frames.length - 1) {
                    count = 0;
                } else {
                    count++;
                }
             }, timer);
             document.getElementById("start").disabled = true;
             document.getElementById("stop").disabled = false;
        }
    }
}

function stopAnimation() {
    isAnimate = false;
    clearInterval(interval);
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
}

function changeAnimationStyle() {
    animationStyle = document.getElementById("animation").value;

}

function changeFontSize() {
    const size = document.getElementById("fontsize").value;
    document.getElementById("text-area").style.fontSize = fontSizes[size];
}

function changeAnimationSpeed() {
    let isChecked = document.getElementById("turbo");
    if (isChecked.checked) {
        timer = 50;
    } else {
        timer = 250;
    }
    if (isAnimate) {
        clearInterval(interval);
        startAnimation();  
    }
}