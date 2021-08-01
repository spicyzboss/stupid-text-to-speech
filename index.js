var synth = window.speechSynthesis;
speak = () => {
    var x = document.querySelector("#text").value
    var utterThis = new SpeechSynthesisUtterance(x);
    utterThis.lang = "th-TH";
    synth.speak(utterThis);
}

// const app = require('express')();
// const PORT = 8080;

// app.listen(PORT, () => {
//     console.log(`alive on https://spicyzdev.com:${PORT}`)
// })