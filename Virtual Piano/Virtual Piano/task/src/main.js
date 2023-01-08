document.addEventListener("keydown", function(event) {
    let key = event.key.toUpperCase();
    switch (key) {
        case 'A':
        case 'D':
        case 'F':
        case 'G':
        case 'H':
        case 'J':
        case 'S':
            let audio = new Audio("./key_sounds/white_keys/" + event.key + ".mp3");
            audio.play();
            break;
        case 'W':
        case 'E':
        case 'T':
        case 'Y':
        case 'U':
            let audio_b = new Audio("./key_sounds/black_keys/" + event.key + ".mp3");
            audio_b.play();
            break;
    }

});

let whiteKeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J'];
whiteKeys.forEach(function(elem) {
    document.getElementById(elem).addEventListener("click", function() {
        let audio = new Audio("./key_sounds/white_keys/" + elem + ".mp3");
        audio.play();
    });
});
let blackKeys = ['W', 'E', 'T', 'Y', 'U'];
blackKeys.forEach(function(elem) {
    document.getElementById(elem).addEventListener("click", function() {
        let audio = new Audio("./key_sounds/black_keys/" + elem + ".mp3");
        audio.play();
    })
});