document.getElementById("upper-case").addEventListener("click", function() {
    let text = document.querySelector("textarea");
    text.value = text.value.toUpperCase();
});
document.getElementById("lower-case").addEventListener("click", function() {
    let text = document.querySelector("textarea");
    text.value = text.value.toLowerCase();
});
document.getElementById("proper-case").addEventListener("click", function() {
    let text = document.querySelector("textarea");
    let textWords = text.value.toLowerCase().split(' ');
    for (let i = 0; i < textWords.length; i++) {
        textWords[i] = textWords[i].charAt(0).toUpperCase() + textWords[i].slice(1);
    }
    text.value = textWords.join(' ');
});
document.getElementById("sentence-case").addEventListener("click", function() {
    let text = document.querySelector("textarea");
    let textWords = text.value.toLowerCase().split('. ');
    for (let i = 0; i < textWords.length; i++) {
        textWords[i] = textWords[i].charAt(0).toUpperCase() + textWords[i].slice(1);
    }
    text.value = textWords.join('. ');
});
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
document.getElementById("sentence-case").addEventListener("click", function() {
    let text = document.querySelector("textarea");
    download("text.txt",text.value);
});