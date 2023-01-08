document.addEventListener("keydown", function(event) {
    // console.log("The '" + event.key + "' key is pressed.");
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
